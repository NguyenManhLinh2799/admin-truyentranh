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
}

module.exports = ReportCommentDao;