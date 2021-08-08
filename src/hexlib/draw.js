
import {hexToPixel, polygonCorners} from "./core.js";
import {Terrain} from "../generator/values.js";


/**
 * @param {number} id
 *
 * @returns {HTMLImageElement}
 */
const getTerrainImageById = (id) => {

    let image = null;

    const current = Terrain.find(terrain => terrain.id === id);
    if (current) {
        image = current.img;
    }

    return image;
};

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {*} layout
 * @param {*} shape
 * @param {number} terrainId
 */
const drawShape = (ctx, layout, shape, terrainId) => {

    const image = getTerrainImageById(terrainId);
    const corner = polygonCorners(layout, shape)[0];

    // WORKAROUND
    const testImage = new Image();
    testImage.onload = function () {
        console.log(testImage);
        ctx.drawImage(testImage, corner.x - 60, corner.y - 46);
    };
    testImage.src = encodeURI(image);

};

/*
const drawTown = (ctx, layout, name, shape) => {
    const image = Zen.Cache.getImage("cities"),
        corner = polygonCorners(layout, shape)[0];

    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    // ctx.drawImage(image, 0, 0, image.width, image.height, corner.x - image.width + 4, corner.y - 46.1, image.width, image.height);
    // ctx.mozImageSmoothingEnabled = false;
    // village = 14
    // town = 77
    // metropolis = 142
    ctx.drawImage(image, 14, 0, 33, 27, corner.x - 52, corner.y - 25, 33 * 1.4, 27 * 1.4);

    // ctx.textBaseline = "top";
    ctx.font = "13px bold Arial";
    ctx.fillStyle = "#000000";
    ctx.shadowColor = "#ffffff";
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = -1;
    ctx.shadowBlur = 2;

    ctx.fillText(name, corner.x - ctx.measureText(name).width, corner.y + 20);
};
*/

/*
const drawBorder = (ctx, layout, hex, color) => {
    const corners = polygonCorners(layout, hex);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.moveTo(corners[5].x, corners[5].y);
    for (let i = 0; i < 6; i++) {
        ctx.lineTo(corners[i].x, corners[i].y);
    }
    ctx.stroke();
};
*/

const drawHexGrid = (ctx, layout, hex, color) => {
    const corners = polygonCorners(layout, hex);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(corners[5].x, corners[5].y);
    for (let i = 0; i < 6; i++) {
        ctx.lineTo(corners[i].x, corners[i].y);
    }
    ctx.stroke();
};

// FOR TESTS ONLY
const colorForHex = (hex) => {
    if (hex.q() === 0 && hex.r() === 0 && hex.s() === 0) {
        return "hsl(0, 50%, 0%)";
    } else if (hex.q() === 0) {
        return "hsl(90, 70%, 35%)";
    } else if (hex.r() === 0) {
        return "hsl(200, 100%, 35%)";
    } else if (hex.s() === 0) {
        return "hsl(300, 40%, 50%)";
    } else {
        return "hsl(0, 0%, 50%)";
    }
};

const drawHexLabel = (ctx, layout, hex) => {
    const center = hexToPixel(layout, hex);
    ctx.fillStyle = colorForHex(hex);
    ctx.font = "10px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(hex.q() + "," + hex.r() + "," + hex.s()), center.x, center.y);
};

const clearScreen = (ctx, backgroundColor) => {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
};

const drawGrid = (ctx, withLabels, layout, hexes) => {

    let hex = null;

    for (let i = 0; i < hexes.length; i = i + 1) {
        for (let j = 0; j < hexes[i].length; j = j + 1) {
            hex = hexes[i][j];
            drawHexGrid(ctx, layout, hex.shape, "#000000");
            if (withLabels) {
                drawHexLabel(ctx, layout, hex.shape);
            }
        }
    }

    /*
    hexes.forEach(function (hex) {
        drawHexGrid(ctx, layout, hex, "#000000");
        if (withLabels) {
            drawHexLabel(ctx, layout, hex);
        }
    });
    */
};


export {drawGrid, drawHexGrid, drawShape};
