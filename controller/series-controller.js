var SeriesDao = require('../dao/series-dao');
var MemberDao = require('../dao/member-dao');
var GenreDao = require('../dao/genre-dao');
var ChapterDao = require('../dao/chapter-dao');

module.exports = {
    loadManageSeries: async (req, res) => {
        try {
            const allSeries = await SeriesDao.getAll();
            res.render('manage-series', { allSeries: allSeries, statusToString: statusToString });
        } catch (error) {
            console.log(error);
        }
    },

    loadSeriesInfo: async (req, res) => {
        try {
            const series = await SeriesDao.get(req.params.id);
            const postedBy = await MemberDao.get(series.postedBy);

            var genreList = [];
            for (const genreID of series.genreList)
            {
                const genre = await GenreDao.get(genreID);
                genreList.push(genre);
            }

            var chapterList = await ChapterDao.getAllBySeries(series._id);

            res.render('series-info', {
                series: series,
                postedBy: postedBy,
                genreList: genreList,
                chapterList: chapterList,
                statusToString: statusToString
            });
        } catch (error) {
            console.log(error);
        }
    }
}

var statusToString = function (status) {
    if (status == -1) return "Chưa duyệt";
    if (status == 0) return "Đã khóa";
    if (status == 1) return "Bình thường";
}