var chapterModel = require('../model/chapter-model');

class ChapterDao {
    static getAll() {
        return chapterModel.find({});
    }

    static get(id)
    {
        return chapterModel.findOne({ _id: id });
    }

    static getAllBySeries(seriesID)
    {
        return chapterModel.find({ series: seriesID });
    }

    static countUnverifiedChapters()
    {
        return chapterModel.count({ status: -1 });
    }
}

module.exports = ChapterDao;