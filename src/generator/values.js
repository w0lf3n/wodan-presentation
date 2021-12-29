
const Movement = {
    SWIMMABLE: 0,
    WALKABLE: 1,
    IMPASSABLE: 2
};

const Terrain = [

    {id: 0, name: "ocean", height: 0.3, move: Movement.SWIMMABLE},
    {id: 1, name: "shore", height: 0.43, move: Movement.SWIMMABLE}, // 0.43 sea level
    {id: 2, name: "meadow", height: 0.55, move: Movement.WALKABLE},
    {id: 3, name: "hillock", height: 0.6, move: Movement.WALKABLE},
    {id: 4, name: "hills", height: 0.65, move: Movement.WALKABLE},
    {id: 5, name: "mountain", height: 1.0, move: Movement.IMPASSABLE}

];

/*
const Moisture = [
        // TODO how to select what type of vegetation
        // deciduous
        // mixed
        // pine
        {value: 0, type: this.FORESTSPARSE},
        {value: 0, type: this.FORESTBASE},
        {value: 0, type: this.FORESTDENSE}
    ],
*/

const Shape = {
    CONTINENT: 0,
    ISLAND: 1
};
// and SUB TYPES and other SHAPES
// as DESERT, ROCKY, WOODS, DELTA,
// add the initial values for lgorithm here here if possible


export {Movement, Shape, Terrain};
