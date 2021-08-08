
const SOUTHEAST = 0;
const NORTHEAST = 1;
const NORTH = 2;
const NORTHWEST = 3;
const SOUTHWEST = 4;
const SOUTH = 5;

const Cube = function (q, r) {
    this.q = () => q;
    this.r = () => r;
    this.s = () => -q - r;
};

const Orientation = function (f0, f1, f2, f3, b0, b1, b2, b3, start_angle) {

    this.f0 = f0;
    this.f1 = f1;
    this.f2 = f2;
    this.f3 = f3;
    this.b0 = b0;
    this.b1 = b1;
    this.b2 = b2;
    this.b3 = b3;
    this.angle = start_angle;

    Object.freeze(this);
};

const Point = function (x, y) {

    this.x = x;
    this.y = y;

    Object.seal(this);
};

const Layout = function (orientation, size, origin) {

    this.orientation = (orientation instanceof Orientation) ? orientation : null;
    this.size = (size instanceof Point) ? size : null;
    this.origin = (origin instanceof Point) ? origin : null;

    Object.seal(this);
};

const Directions = [
    new Cube(1, 0),
    new Cube(1, -1),
    new Cube(0, -1),
    new Cube(-1, 0),
    new Cube(-1, 1),
    new Cube(0, 1)
];

const LayoutPointy = new Orientation(Math.sqrt(3.0), Math.sqrt(3.0) / 2.0, 0.0, 3.0 / 2.0, Math.sqrt(3.0) / 3.0, -1.0 / 3.0, 0.0, 2.0 / 3.0, 0.5);
const LayoutFlat = new Orientation(3.0 / 2.0, 0.0, Math.sqrt(3.0) / 2.0, Math.sqrt(3.0), 2.0 / 3.0, 0.0, -1.0 / 3.0, Math.sqrt(3.0) / 3.0, 0.0);

const add = function (hex1, hex2) {
    return new Cube(hex1.q() + hex2.q(), hex1.r() + hex2.r());
};

const scale = function (hex1, k) {
    return new Cube(hex1.q() * k, hex1.r() * k);
};

const subtract = function (hex1, hex2) {
    return new Cube(hex1.q() - hex2.q(), hex1.r() - hex2.r());
};

const compare = function (hex1, hex2) {
    return hex1.q() === hex2.q() && hex1.r() === hex2.r();
};

const length = function (hex) {
    return (Math.abs(hex.q()) + Math.abs(hex.r()) + Math.abs(hex.s())) / 2;
};

const distance = function (hex1, hex2) {
    return length(subtract(hex1, hex2));
};

const direction = function (direction) {
    return (direction > -1 && direction < 6) ? Directions[direction] : null;
};

const neighbour = function (hex, direction) {
    return add(hex, direction(direction));
};

const neighbourhood = function (hex) {
    const hood = [];
    for (let i = 0; i < Directions.length; i = i + 1) {
        hood.push(neighbour(hex, i));
    }
    return hood;
};

const hexToPixel = function (layout, hex) {
    return new Point(
        (layout.orientation.f0 * hex.q() + layout.orientation.f1 * hex.r()) * layout.size.x + layout.origin.x,
        (layout.orientation.f2 * hex.q() + layout.orientation.f3 * hex.r()) * layout.size.y + layout.origin.y
    );
};

const pixelToHex = function (layout, p) {
    const x = (p.x - layout.origin.x) / layout.size.x,
        y = (p.y - layout.origin.y) / layout.size.y;
    return new Cube(
        layout.orientation.b0 * x + layout.orientation.b1 * y,
        layout.orientation.b2 * x + layout.orientation.b3 * y
    );
};

const cornerOffset = function (layout, corner) {
    const angle = 2.0 * Math.PI * (layout.orientation.angle + corner) / 6;
    return new Point(layout.size.x * Math.cos(angle), layout.size.y * Math.sin(angle));
};

const polygonCorners = function (layout, hex) {
    const corners = [],
        center = hexToPixel(layout, hex);
    let offset,
        i;
    for (i = 0; i < 6; i++) {
        offset = cornerOffset(layout, i);
        corners.push(new Point(center.x + offset.x, center.y + offset.y));
    }
    return corners;
};

const round = function (hex) {

    let q = Math.round(hex.q()),
        r = Math.round(hex.r()),
        s = Math.round(hex.s());

    const qD = Math.abs(q - hex.q()),
        rD = Math.abs(r - hex.r()),
        sD = Math.abs(s - hex.s());

    if (qD > rD && qD > sD) {
        q = -r - s;
    } else if (rD > sD) {
        r = -q - s;
    } else {
        s = -q - r;
    }
    return new Cube(q, r);
};

const lerp = function (hex1, hex2, t) {
    return new Cube(hex1.q() + (hex2.q() - hex1.q()) * t, hex1.r() + (hex2.r() - hex1.r()) * t);
};

const lineDraw = function (hex1, hex2) {
    const N = distance(hex1, hex2),
        results = [],
        step = 1.0 / Math.max(N, 1);
    for (let i = 0; i <= N; i++) {
        results.push(round(lerp(hex1, hex2, step * i)));
    }
    return results;
};


/*
function OffsetCoord(col, row) {
    return {col: col, row: row};
}

var EVEN = 1;
var ODD = -1;
function qoffset_from_cube(offset, h)
{
    var col = h.q;
    var row = h.r + Math.trunc((h.q + offset * (h.q & 1)) / 2);
    return OffsetCoord(col, row);
}

function qoffset_to_cube(offset, h)
{
    var q = h.col;
    var r = h.row - Math.trunc((h.col + offset * (h.col & 1)) / 2);
    var s = -q - r;
    return Cube(q, r, s);
}

function roffset_from_cube(offset, h)
{
    var col = h.q + Math.trunc((h.r + offset * (h.r & 1)) / 2);
    var row = h.r;
    return OffsetCoord(col, row);
}

function roffset_to_cube(offset, h)
{
    var q = h.col - Math.trunc((h.row + offset * (h.row & 1)) / 2);
    var r = h.row;
    var s = -q - r;
    return Cube(q, r, s);
}
*/


export {
    Cube,
    hexToPixel,
    Layout,
    LayoutFlat,
    LayoutPointy,
    Point,
    polygonCorners
};
