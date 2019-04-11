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
});

module.exports = mongoose.model('Movie', movieSchema);