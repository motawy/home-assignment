import Jimp from 'jimp';
import { getExtentionUtil } from './extention'

/**
 * Utility to resize images given in input using Jimp
 * Saves the image in local folder /public/uploads/
 */
const imageResizerUtil = async (imgObject: any): Promise<Object> => {
    const { _id, details } = imgObject;
    let extention = getExtentionUtil(details.mimetype)
    if (extention === '') console.error('Type not supported')
    const outpath = details.path.split('_')[0] + '_140x140' + extention
    try {
        const img = await Jimp.read(details.path)
        img.resize(140, 140).quality(60).write(outpath);
        return {
            "_id": _id,
            "fullsizename": details.filename,
            "originalname": details.originalname,
            "mimetype": details.mimetype,
            "path": outpath,
        }
    } catch (err) {
        console.log(err);
        return null
    }
}

export default imageResizerUtil