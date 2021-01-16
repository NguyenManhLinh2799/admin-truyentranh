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

    static async verify(id)
    {
        var chapter = await this.get(id);
        chapter.status = 1;
        chapter.save();
    }

    static async delete(id)
    {
        await chapterModel.deleteOne({ _id: id });
    }
}

module.exports = ChapterDao;