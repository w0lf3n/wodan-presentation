
import {Cube} from "../hexlib/core.js";
import {isNumber} from "../../lib/native/typecheck.js";


const Country = class {};
const Town = class {};
const Unit = class {};

const Field = class {

    constructor (shapeObj = null) {

        this._country = null;
        this._shape = shapeObj;
        this._terrain = -1;
        this._town = null;
        this._unit = null;

    }

    get country () {
        return this._country;
    }

    set country (country) {
        if (country instanceof Country) {
            this._country = country;
        }
    }

    get shape () {
        return this._shape;
    }

    set shape (shape) {
        if (shape instanceof Cube) {
            this._shape = shape;
        }
    }

    get terrain () {
        return this._terrain;
    }

    set terrain (terrainId) {
        if (isNumber(terrainId)) {
            this._terrain = terrainId;
        }
    }

    get town () {
        return this._town;
    }

    set town (town) {
        if (town instanceof Town) {
            this._town = town;
        }
    }

    // UNIT

    get unit () {
        return this._unit;
    }

    set unit (unit) {
        if (unit instanceof Unit) {
            this._unit = unit;
        }
    }

};


export {Field};
