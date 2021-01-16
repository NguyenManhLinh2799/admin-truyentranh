var reportCommentModel = require('../model/report-comment-model');

class ReportCommentDao {
    static getAll() {
        return reportCommentModel.find({});
    }

    static get(id)
    {
        return reportCommentModel.findOne({ _id: id });
    }

    static countAll()
    {
        return reportCommentModel.count({});
    }

    static async delete(id)
    {
        await reportCommentModel.deleteOne({ _id: id });
    }
}

module.exports = ReportCommentDao;