const mongoose = require('mongoose');

const shareSchema = new mongoose.Schema({
    category: String,
    name: String,
    description: String,
    photo: String,
    creator: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Share', shareSchema);