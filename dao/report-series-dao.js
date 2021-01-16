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

    static async delete(id)
    {
        await reportSeriesModel.deleteOne({ _id: id });
    }
}

module.exports = ReportCommentDao;