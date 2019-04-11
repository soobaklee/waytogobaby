const mongoose = require('mongoose');

const reviewSchema = new Schema({
    postedBy: {
        type: Schema.Types.OjectId,
        ref: 'User',
    },
    review: String,
    rating: {type: Number, min: 1, max: 5, default: 3}
});

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
    reviews: [reviewSchema],
}, {
    timestamps: true,
});

// productSchema.set('toJSON', {
//     transform: function (doc, ret) {
//         return ret;
//     }
// });

module.exports = mongoose.model('Product', productSchema);