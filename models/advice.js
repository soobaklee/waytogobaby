const mongoose = require('mongoose');
const Schema = mongoose.Schema

const responseSchema = new Schema({
    response: String,
    postedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

const adviceSchema = new mongoose.Schema({
    title: String,
    content: String,
    postedBy: [{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }],
    responses: [responseSchema]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Advice', adviceSchema);