import Jimp from 'jimp';
import { getExtentionUtil } from './extention'

/**
 * Utility to resize images given in input using Jimp
 * Saves the image in local folder /public/uploads/
 */
const imageResizerUtil = async (imgObject: any): Promise<Object> => {
    const { _id, instant } = imgObject;
    let extention = getExtentionUtil(instant.mimetype)
    if (extention === '') console.error('Type not supported')
    const outpath = instant.path.split('_')[0] + '_140x140' + extention
    try {
        const img = await Jimp.read(instant.path)
        img.resize(140, 140).quality(60).write(outpath);
        return {
            "_id": _id,
            "fullsizename": instant.filename,
            "originalname": instant.originalname,
            "mimetype": instant.mimetype,
            "path": outpath,
        }
    } catch (err) {
        console.log(err);
        return null
    }
}

export default imageResizerUtil