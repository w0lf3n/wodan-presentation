
import {Shape} from "./values.js";


// initiated with default values
const Settings = Object.seal({

    SCREEN_WIDTH: 1366,
    SCREEN_HEIGHT: 768,

    HEX_WIDTH: 28,
    HEX_HEIGHT: 19.6,
    HEX_OFFSETX: 21,
    HEX_OFFSETY: 8,

    MAP_WIDTH: 32,
    MAP_HEIGHT: 22,
    MAP_HALF_WIDTH: -1,
    MAP_HALF_HEIGHT: -1,

    MAP_SHAPE: Shape.ISLAND,
    MAP_LAYOUT: null,

    NOISE_LEVEL: 1,
    SMOOTH_LEVEL: 3,

    NUMBER_PLAYERS: 1,

    MAXIMUM_TOWNS: -1, // -1 = infinite
    NUMBER_START_TOWNS: 1

});


export {Settings};
