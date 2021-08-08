
import {Component} from "../dom/component.js";
import {isNumber} from "../native/typecheck.js";


// const CanvasRenderer = class extends Renderer {};
const CanvasComponent = class extends Component {

    /**
     * @param {string} className
     * @param {number} width
     * @param {number} height
     */
    constructor (className = null) {
        super("canvas", className);
    }

    /** @returns {CanvasRenderingContext2D} */
    getContext () {
        return super.getHTMLElement().getContext("2d");
    }

    setSize (x = -1, y = -1) {
        if (isNumber(x) && x > -1 && isNumber(y) && y > -1) {
            super.setAttribute("width", x);
            super.setAttribute("height", y);
        }
    }

};


export {CanvasComponent};
