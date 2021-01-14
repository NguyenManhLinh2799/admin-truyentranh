var reportSeriesModel = require('../model/report-series-model');

class ReportCommentDao {
    static getAll() {
        return reportSeriesModel.find({});
    }

    static get(id)
    {
        return reportSeriesModel.findOne({ _id: id });
    }

    static countAll()
    {
        return reportSeriesModel.count({});
    }
}

module.exports = ReportCommentDao;