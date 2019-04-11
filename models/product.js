const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    categoryPath: String,
    name: String,
    itemId: Number,
    brandName: String,
    shortDescription: String,
    msrp: Number,
    salePrice: Number,
    mediumImage: String,
    age: String,
}, {
    timestamps: true,
});

// productSchema.set('toJSON', {
//     transform: function (doc, ret) {
//         return ret;
//     }
// });

module.exports = mongoose.model('Product', productSchema);