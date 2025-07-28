const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDirs = {
    image: "uploads/giftCourse/image",
    replyImage: "uploads/giftCourse/replyImage"
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = uploadDirs[file.fieldname] || "uploads/giftCourse/others";
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    },
});

const fileFilter = function (req, file, cb) {
    const allowedTypes = ["image/png", "image/jpg", "image/jpeg", "image/svg+xml"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed"), false);
    }
};

const uploadImage = multer({ storage, fileFilter }).fields([
    { name: "image", maxCount: 1 },
    { name: "replyImage", maxCount: 3 }
]);

module.exports = uploadImage;