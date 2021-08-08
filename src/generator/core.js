
import {Movement, Shape, Terrain} from "./values.js";
import {Cube} from "../hexlib/core.js";
import {Field} from "../game/field.js";
import {Random} from "../../lib/random/random.js";
import {Settings} from "./settings.js";


let HEIGHT = -1;
let WIDTH = -1;

const names = [];
const land = [];

const analyzeNoise = function (value) {

    let result = null;

    const current = Terrain.find(terrain => terrain.height >= value);
    if (current) {
        result = {terrain: current.id, isLand: current.move === Movement.WALKABLE};
    }

    return result;
};

/* const createCountry = function (stats) {

    let success = false,
        town,
        field2;

    // randomly choose object (hex) from land
    // have to pop() because splice returns an array
    // field1 instanceof GAME.Field
    const field1 = land.splice(Math.floor(RandomNumberGenerator.next() * land.length), 1).pop();

    // remove all neighbours if possible and store them into neighbours list
    // this neighbourhood is only an abstract one, there are no references, they still have to be loaded
    // hood instanceof Array of GAME.Field
    const hood = removeFieldsFromLand(HexLib.neighbourhood(field1.getShape()));

    // if neighbours list greater 0
    if (hood.length > 0) {

        // choose a neighbour randomly
        // field2 instanceof GAME.Field
        field2 = hood[Math.floor(RandomNumberGenerator.next() * hood.length)];

        // remove neighbours of additional country field from land
        removeFieldsFromLand(HexLib.neighbourhood(field2.getShape()));

        // create town
        town = new GAME.Town(Name.create(), stats.population);

        // add town to field1
        field1.setTown(town);

        // create a neutral country with these 2 cells & create town
        new GAME.Country(null, stats.treasure, [field1, field2], [town]);

        success = true;
    }

    return success;
};
*/

const createEmptyMap = function () {

    const HALFWIDTH = Math.floor(WIDTH * 0.5);
    const HALFHEIGHT = Math.floor(HEIGHT * 0.5);

    const fields = [];

    const i1 = -HALFWIDTH;
    const i2 = i1 + WIDTH;
    const j1 = -HALFHEIGHT;
    const j2 = j1 + HEIGHT;

    let offset;
    let i;
    let j;

    for (i = i1; i < i2; i = i + 1) {
        offset = -Math.floor(i * 0.5);
        fields[i + HALFWIDTH] = [];
        for (j = j1 + offset; j < j2 + offset; j = j + 1) {
            // calculate normal array indeces to correctly map the noise later
            fields[i + HALFWIDTH][j + HALFHEIGHT - offset] = new Field(new Cube(i, j));
        }
    }

    return fields;
};

const noiseToTerrain = function (map, elevation, moisture) {

    let q = -1;
    let r = -1;
    let cell = null;
    let result = null;

    // noise got 1 surrounding of cells only for better smooting (created by whiteNoise)
    // to map correct from noise to final map so start at 1 and end with SIZE + 1
    for (q = 1; q < WIDTH + 1; q = q + 1) {
        for (r = 1; r < HEIGHT + 1; r = r + 1) {

            result = analyzeNoise(elevation[q][r]);

            // map has no additional surrounding so reduce the loop indeces by 1
            cell = map[q - 1][r - 1];

            // cell.noise = elevation[q][r];

            cell.terrain = result.terrain;

            if (result.land) {
                land.push(cell);
            }

        }
    }

    return map;
};

/* removeFieldsFromLand = function (fields) {

        var found = [],
            i,
            j;

        for (i = 0; i < fields.length; i = i + 1) {
            for (j = 0; j < land.length; j = j + 1) {
                if (HexLib.compare(fields[i], land[j].getShape())) {
                    found = found.concat(land.splice(j, 1));
                    break;
                }
            }
        }

        return found;
    };
*/

const smoothNoise = function (noise, level) {

    let l = -1;
    let q = -1;
    let r = -1;

    for (l = 0; l < level; l = l + 1) {
        // noise got 1 surrounding of cells only for better smooting (created by whiteNoise)
        // so start at 1 and end with SIZE + 1
        for (q = 1; q < WIDTH + 1; q = q + 1) {
            for (r = 1; r < HEIGHT + 1; r = r + 1) {

                noise[q][r]
                    // CORNERS 1/4 test with /32
                    = (noise[q - 1][r - 1] + noise[q + 1][r - 1] + noise[q - 1][r + 1] + noise[q + 1][r + 1]) / 16
                    // NEIGHBOURS 2/4 test with /16
                    + (noise[q - 1][r] + noise[q + 1][r] + noise[q][r - 1] + noise[q][r + 1]) / 8
                    // CELL ITSELF 1/4 test with /2
                    + noise[q][r] / 4;
            }
        }
    }

    return noise;
};

const whiteNoise = function (seed, level) {

    // create several noise areas and interpolate between values, add number or range for max random

    const noise	= [];
    let q = -1;
    let r = -1;

    // set random number generator
    Random.init(seed);

    // white noise creates an additional col & row at every border for smoothing
    for (q = 0; q < WIDTH + 2; q = q + 1) {
        noise[q] = [];
        for (r = 0; r < HEIGHT + 2; r = r + 1) {


            // CREATE ISLAND SHAPE
            if (Settings.MAP_SHAPE === Shape.ISLAND) {

                if (q === 0 || r === 0 || q === WIDTH + 1 || r === HEIGHT + 1) {
                    noise[q][r] = 0; // 0 = water
                } else {
                    noise[q][r] = Random.next();
                }

            // CREATE CONTINENTAL SHAPE
            } else if (Settings.MAP_SHAPE === Shape.CONTINENT) {

                /* random from waterline to 1.0
                if (q < 0 || r < 0 || q > WIDTH - 1 || r > HEIGHT - 1) {
                    noise[q][r] = 0;
                } else {
                    noise[q][r] = RandomNumberGenerator.next();
                }*/

                // create more shapes
                // ALSO extend function by randomly set weights to some points in an area as 0 for water/lake or 1 for hills
                // ALSO extend function by setting max number of lakes or mountains

                // ALTERNATIVE, IF MAPTYPE WAS NOT SET/IS WRONG
            } else {

                noise[q][r] = Random.next();

            }
        }
    }
    return noise;
};

/* Name = (function () {

        const CONSONANT = 0,
              VOWEL = 1,
              BINDINGS = NAMES.VILLAGE.BINDINGS.split(","),
              CONSONANTS = NAMES.VILLAGE.CONSONANTS.split(","),
              ENDS = NAMES.VILLAGE.ENDS.split(","),
              PARTS = NAMES.VILLAGE.PARTS.split(",").concat(NAMES.VILLAGE.ENDS.split(",")),
              VOWELS = NAMES.VILLAGE.VOWELS.split(",");

        var name = {},
            created = [],
            type,
            // METHODS
            getBinding,
            getConsonant,
            getEnd,
            getPart,
            getVowel;

        getBinding = function () {
            return BINDINGS[Math.floor(RandomNumberGenerator.next() * BINDINGS.length)];
        };

        getConsonant = function () {
            type = CONSONANT;
            return CONSONANTS[Math.floor(RandomNumberGenerator.next() * CONSONANTS.length)];
        };

        getEnd = function () {
            return ENDS[Math.floor(RandomNumberGenerator.next() * ENDS.length)];
        };

        getPart = function () {
            return PARTS[Math.floor(RandomNumberGenerator.next() * PARTS.length)];
        };

        getVowel = function () {
            type = VOWEL;
            return VOWELS[Math.floor(RandomNumberGenerator.next() * VOWELS.length)];
        };

        name.create = function () {

            var name,
                length,
                temp;

            // 1) start with vowel or consonant
            if (RandomNumberGenerator.next() < 0.5) {
                name = getConsonant();
            } else {
                name = getVowel();
            }
            name = name.toUpperCase();

            // 2) length of name part
            length = 2 + Math.floor(RandomNumberGenerator.next() * 3);

            // creating the first part
            while (name.length < length) {
                if (type === CONSONANT) {
                    temp = getVowel();
                    // add possible different vowel
                    if (RandomNumberGenerator.next() < 0.1) {
                        temp = temp + getVowel();
                    }
                } else {
                    temp = getConsonant();
                    // add possible binding consonant
                    if (RandomNumberGenerator.next() < 0.1) {
                        temp = getBinding() + temp;
                    }
                }

                // possible double
                if (temp.length === 1 && RandomNumberGenerator.next() < 0.05) {
                    temp = temp + temp;
                }

                name = name + temp;
            }

            // make last part an own word
            if (RandomNumberGenerator.next() < 0.1 && name.length > 2) {
                temp = getEnd();
                if (RandomNumberGenerator.next() < 0.5) {
                    name = name + "-";
                } else {
                    name = name + " ";
                }
                name = name + temp[0].toUpperCase() + temp.substr(1);

            } else {
                temp = getPart();
                // add possible binding s
                if (RandomNumberGenerator.next() < 0.1) {
                    name = name + "s";
                }
                name = name + temp;
            }

            // add possible ending s
            if (!name.endsWith("h") && !name.endsWith("y") && !name.endsWith("x") && RandomNumberGenerator.next() < 0.1) {
                name = name + "s";
            }

            // check if name was created before
            if (created.includes(name)) {
                name = "New " + name;
            }
            created.push(name);

            return name;
        };


        Object.freeze(name);
        return name;

    }());
*/

/* const allocateCountries = function (seed) {

    var countries = GAME.countries.getAll(),
        players = GAME.players.getAll(),
        townsByPlayer = Math.floor(countries.length / players.length),
        i,
        j,
        k = 0;

    RandomNumberGenerator.init(seed);

    countries.shuffle();
    players.shuffle();

    for (i = 0; i < players.length; i = i + 1) {
        for (j = 0; j < townsByPlayer; j = j + 1) {
            players[i].addCountry(countries[k]);
            k = k + 1;
        }
    }

};
*/

const generateMap = function (elevationSeed, moistureSeed, noiseLevel, smoothLevel) {

    WIDTH = Settings.MAP_WIDTH;
    HEIGHT = Settings.MAP_HEIGHT;

    return noiseToTerrain(
        // empty map for final data storage
        createEmptyMap(),
        // create height map for elevation
        smoothNoise(whiteNoise(elevationSeed, noiseLevel), smoothLevel),
        // create height map for moisture
        smoothNoise(whiteNoise(moistureSeed, noiseLevel), smoothLevel)
    );
};

/* const spreadCountries = function (stats, seed) {

    var numberOfTowns = Math.floor(land.length * 0.1), // 100% of possible towns
        counter;

    numberOfTowns = Math.floor(numberOfTowns * stats.density * 0.01);
    counter = numberOfTowns * 10;

    RandomNumberGenerator.init(seed);

    while (numberOfTowns > 0 && land.length > 0 && counter > 0) {

        if (createCountry(stats)) {
            numberOfTowns = numberOfTowns - 1;
        }

        // security counter to break loop
        counter = counter - 1;

    }

    if (numberOfTowns !== 0) {
        console.warn("error while creating towns. towns left: " + numberOfTowns);
    }

};
*/

export {generateMap};
