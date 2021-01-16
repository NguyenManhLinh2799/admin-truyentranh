var mongoose = require('mongoose');

const memberSchema = mongoose.Schema(
    {
        fullName: String,
        email: String,
        favoriteSeries: [mongoose.Schema.Types.ObjectId],
        isBanned: Boolean,
        password: String,
        registerDate: Date,
        avatar: String
    }
);

module.exports = mongoose.model('Member', memberSchema, 'Member');