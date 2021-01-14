var mongoose = require('mongoose');

const chapterSchema = mongoose.Schema(
    {
        name: String,
        postedDate: Date,
        series: mongoose.Schema.Types.ObjectId,
        imageList: [String],
        status: Number
    }
);

module.exports = mongoose.model('Chapter', chapterSchema, 'Chapter');