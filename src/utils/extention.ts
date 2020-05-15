/**
 * Util function to get extention type from input
 * Type supported png, jpg, jpeg and gif
 */
export const getExtentionUtil = (mimetype: string): string => {
    switch (mimetype) {
        case 'image/png':
            return '.png'
        case 'image/jpg':
            return '.jpg'
        case 'image/jpeg':
            return '.jpeg'
        case 'image/gif':
            return '.gif'
        default:
            return ''
    }
}