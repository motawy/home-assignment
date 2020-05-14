import Jimp from 'jimp';

export async function filterImageFromURL(inputURL: string): Promise<string> {
    return new Promise(async resolve => {
        const photo = await Jimp.read(inputURL);
        await photo
            .resize(140, 140)
            .quality(80)
    });
}