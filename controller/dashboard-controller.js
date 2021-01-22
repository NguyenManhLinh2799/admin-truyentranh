var SeriesDao = require('../dao/series-dao');
var ChapterDao = require('../dao/chapter-dao');
var ReportCommentDao = require('../dao/report-comment-dao');
var ReportSeriesDao = require('../dao/report-series-dao');

module.exports = {
    loadDashboard: async (req, res) => {
        const countUnverifiedSeries = await SeriesDao.countUnverifiedSeries();
        const countUnverifiedChapters = await ChapterDao.countUnverifiedChapters();
        const countReports = await ReportCommentDao.countAll() + await ReportSeriesDao.countAll();

        res.render('index', {
            user: req.user,
            countUnverifiedSeries: countUnverifiedSeries,
            countUnverifiedChapters: countUnverifiedChapters,
            countReports: countReports
        });
        
    }
}