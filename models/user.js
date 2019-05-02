const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

var littleOneSchema = new Schema({
    name: String,
    age: Number,
    birthdate: Date,
    sex: String,
    photo: String,
}, {
    timestamps: true
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    password: String,
    phoneNo: String,
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    birthdate: Date,
    photo: String,
    friends: [{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }],
    littleOnes: [littleOneSchema],
    shareItems: [{
        type: Schema.Types.ObjectId,
        ref: 'Share'
    }],
    productFav: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    productReviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
}, {
        timestamps: true,
    });

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
        return ret;
    }
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


module.exports = mongoose.model('User', userSchema);
