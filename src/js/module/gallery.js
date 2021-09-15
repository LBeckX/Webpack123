import Image from "./image";
import {Video} from "./video";

export class Gallery {

    /**
     * @param {Array<string>} srcSet
     */
    constructor(srcSet) {
        console.log('Gallery is loading...');
        srcSet.forEach(src => {
           new Image(src);
        });
    }
}
