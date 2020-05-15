/**
 * Utility to resize images given in input using Jimp
 * Saves the image in local folder /public/uploads/
 */

import Jimp from 'jimp';
import { getImageExtentionUtil } from './extention'

const imageResizerUtil = async (imgObject: any) => {
    let extention = getImageExtentionUtil(imgObject.mimetype)
    if (extention === '') throw Error('Type not supported')
    const outpath = imgObject.path.split('_')[0] + '_140x140' + extention
    try {
        const img = await Jimp.read(imgObject.path)
        img
            .resize(140, 140)       // resize 140x140
            .quality(60)            // set quality
            .write(outpath);        // save in local folder
    } catch (err) {
        console.log(err);
    }
}

export default imageResizerUtil