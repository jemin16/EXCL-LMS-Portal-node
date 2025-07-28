const multer = require("multer");
const path = require("path");
const fs = require("fs");

const createUploadIcon = (uploadPath = "uploads/default") => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true });
            }
            cb(null, uploadPath);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
            cb(null, file.originalname);
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

    return multer({ storage, fileFilter });
};

const uploadIcon = createUploadIcon("uploads/contactBranches");

module.exports = uploadIcon;

module.exports.createUploadIcon = createUploadIcon;
