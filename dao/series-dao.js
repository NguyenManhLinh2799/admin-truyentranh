var seriesModel = require('../model/series-model');

class SeriesDao {
    static getAll() {
        return seriesModel.find({});
    }

    static get(id)
    {
        return seriesModel.findOne({ _id: id });
    }

    static countUnverifiedSeries()
    {
        return seriesModel.count({ status: -1 });
    }
}

module.exports = SeriesDao;