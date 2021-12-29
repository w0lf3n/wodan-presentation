
import {isString} from "../native/typecheck.js";


let imagePromises = [];

/**
 * @param {Function} loader
 * @param  {Array<string>} url
 * @returns {Promise<any[]> | Promise<any>}
 */
const AbstractLoader = (loader, url) => Promise.all(url.map(loader));

/**
 * @param {String} url
 *
 * @returns {Promise}
 */
const loadJSON = (url = null) => {

    if (!isString(url)) {
        return null;
    }

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    /** @type {RequestInit} */
    const options = {
        method: "GET",
        headers,
        mode: (url.includes("../")) ? "cors" : "same-origin"
    };

    if (!url.endsWith(".json")) {
        url = url + ".json";
    }

    const request = new Request(encodeURI(url));
    return fetch(request, options).then((response) => response.json());
};
/** @param  {...string} url */
const JSONLoader = (...url) => AbstractLoader(loadJSON, url);

/** load image asynchronously
 *
 * @param {String} path
 *
 * @returns {Promise}
 */
const loadImage = path => {

    const promise = new Promise((resolve, reject) => {

        const img = new Image();

        img.onload = resolve(img);
        img.onerror = reject;

        img.src = encodeURI(path);
    });

    // imagePromises.push(promise);

    return promise;
};

/** @param  {...string} url */
const ImageLoader = (...url) => AbstractLoader(loadImage, url);

const AllImagesLoaded = () => {
    const promise = Promise.allSettled(imagePromises);
    imagePromises = [];
    return promise;
};

export {
    ImageLoader,
    AllImagesLoaded,
    JSONLoader
};
