const mongoose = require('mongoose');

const playdateSchema = new mongoose.Schema({
    date: Date,
    startTime: Date,
    endTime: Date,
    place: String,
    attendees: [{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Playdate', playdateSchema);