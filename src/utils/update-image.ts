import { Instant } from '../controllers/v0/instant/models/Instant'

/**
 * Utility to update an image record to add the resized version
 */
const updateImageUtil = async (resizedImage: any) => {
    const { _id } = resizedImage;
    try {
        Instant.findById(_id, async (err, instant) => {
            if (err) return console.error(err);
            instant.resized = resizedImage
            await instant.save()
        })
        console.log("Record update successfully");
    } catch (error) {
        console.error(error);
    }
}
export default updateImageUtil