const studentWishlist = require("../models/studentWishlist");

exports.getWishlistItems = async (req, res) => {
    try {
        const items = await studentWishlist.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.createWishlistItem = async (req, res) => {
    try {
        const newItem = new studentWishlist({
            image: req.file ? req.file.path : null,
            rating: req.body.rating,
            reviews: req.body.reviews,
            title: req.body.title,
            authors: req.body.authors,
            price: req.body.price,
            oldPrice: req.body.oldPrice,
        })
        await newItem.save();
        res.status(201).json({ success: true, data: newItem });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateWishlistItem = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedItem = { ...req.body };
        if (req.file) {
            updatedItem.image = req.file.path;
        }
        const item = await studentWishlist.findByIdAndUpdate(id, updatedItem, { new: true });
        if (!item) {
            return res.status(404).json({ success: false, message: "wishlist item not found" });
        }
        res.status(200).json({ success: true, data: item });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}