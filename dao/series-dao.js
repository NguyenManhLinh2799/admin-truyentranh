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

    static async verify(id)
    {
        var series = await this.get(id);
        series.status = 1;
        series.save();
    }

    static async delete(id)
    {
        await seriesModel.deleteOne({ _id: id });
    }
}

module.exports = SeriesDao;