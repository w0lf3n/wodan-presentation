
import {Layout, LayoutFlat, Point} from "./hexlib/core.js";
import {Application} from "../lib/dom/application.js";
import {Cache} from "../lib/res/cache.js";
import {CanvasComponent} from "../lib/renderer/canvas.js";
import {drawGrid, drawShape} from "./hexlib/draw.js";
import {generateMap} from "./generator/core.js";
import {ImageLoader} from "../lib/res/loaders.js";
import {Random} from "../lib/random/random.js";
import {Settings} from "./generator/settings.js";
import {Terrain} from "./generator/values.js";


const app = new Application("Wodan Map Demo");

const canvas = new CanvasComponent("Center");
canvas.setSize(1366, 768);
app.getRootPane().addComponent(canvas);

const imageCache = new Cache();
let myMap = null;

const createMap = function () {

    Settings.MAP_HALF_WIDTH = Math.floor(Settings.MAP_WIDTH * 0.5);
    Settings.MAP_HALF_HEIGHT = Math.floor(Settings.MAP_HEIGHT * 0.5);
    Settings.MAP_LAYOUT = new Layout(
        LayoutFlat,
        new Point(Settings.HEX_WIDTH, Settings.HEX_HEIGHT),
        new Point(
            Math.floor(Settings.SCREEN_WIDTH * 0.5) + Settings.HEX_OFFSETX,
            Math.floor(Settings.SCREEN_HEIGHT * 0.5) + Settings.HEX_OFFSETY
        )
    );
    Object.freeze(Settings);

    const elevationSeed = Math.floor(Random.next() * Number.MAX_SAFE_INTEGER);
    const moistureSeed = Math.floor(Random.next() * Number.MAX_SAFE_INTEGER);
    const townSeed = Math.floor(Random.next() * Number.MAX_SAFE_INTEGER);
    const nameSeed = Math.floor(Random.next() * Number.MAX_SAFE_INTEGER);
    const allocationSeed = Math.floor(Random.next() * Number.MAX_SAFE_INTEGER);

    return generateMap(
        elevationSeed,
        moistureSeed,
        Settings.NOISE_LEVEL,
        Settings.SMOOTH_LEVEL
    );
};

const drawMap = function (ctx, map) {

    const width = map.length;
    const height = map[0].length;

    let field;
    let i;
    let j;

    for (i = 0; i < width; i = i + 1) {
        for (j = 0; j < height; j = j + 1) {

            field = map[i][j];

            drawShape(
                ctx,
                Settings.MAP_LAYOUT,
                field.shape,
                imageCache.getItem(Terrain[field.terrain].name)
            );

        }
    }
    drawGrid(ctx, true, Settings.MAP_LAYOUT, map);
};

ImageLoader(
    "res/graphics/ocean.png",
    "res/graphics/shore.png",
    "res/graphics/meadow.png",
    "res/graphics/hillock.png",
    "res/graphics/hills.png",
    "res/graphics/mountain.png"
).then(data => {

    // TODO use resource map
    for (let i = 0; i < data.length; i = i + 1) {
        imageCache.setItem(Terrain[i].name, data[i]);
    }

    myMap = createMap();
    drawMap(canvas.getContext(), myMap);
});
