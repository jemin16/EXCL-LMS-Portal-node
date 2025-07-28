const publicCheckoutCartModel = require("../models/publicCheckoutCart");

exports.getPublicGrid = async (req, res) => {
    try {
        const publicCheckoutCart = await publicCheckoutCartModel.find();
        res.json(publicCheckoutCart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.createPublicGrid = async (req, res) => {
    try {

        const imagePath = req.file ? req.file.path : req.body.image;

        const newPublicGrid = new publicCheckoutCartModel({
            image: imagePath,
            rating: req.body.rating,
            reviews: req.body.reviews,
            title: req.body.title,
            authors: req.body.authors,
            price: req.body.price,
            oldPrice: req.body.oldPrice,
        })
        await newPublicGrid.save();
        res.status(201).json({ success: true, data: newPublicGrid });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.updatePublicGrid = async (req, res) => {
    try {
        const updatedPublicGrid = await publicCheckoutCartModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedPublicGrid);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.deletePublicGrid = async (req, res) => {
    try {
        const deletedPublicGrid = await publicCheckoutCartModel.findByIdAndDelete(req.params.id);
        res.json(deletedPublicGrid);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
