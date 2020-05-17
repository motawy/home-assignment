import path from 'path'
import { v4 as uuidv4 } from 'uuid'
import multer from 'multer'

/**
 * Create disk storage and create a file name convention
 * uuid + _original + extention
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/app/public/uploads/')
    },

    filename: function (req: any, file: any, cb: any) {
        cb(null, uuidv4() + "_original" + path.extname(file.originalname))
    }
});

/**
 * Filter to apply to all files uploaded
 */
const fileFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/gif") {
        cb(null, true);
    } else {
        cb(new Error("Image uploaded is not of type jpg/jpeg, png or gif"), false);
    }
}
export const upload = multer({ storage: storage, fileFilter: fileFilter }).single('details');