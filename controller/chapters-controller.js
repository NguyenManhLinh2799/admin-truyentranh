var ChapterDao = require('../dao/chapter-dao');
var SeriesDao = require('../dao/series-dao');

module.exports = {
    loadManageChapters: async (req, res) => {
        const allChapters = await ChapterDao.getAll();
        var series = [];
        for (const chapter of allChapters)
        {
            const s = await SeriesDao.get(chapter.series);
            series.push(s);
        }
        res.render('manage-chapters', {
            user: req.user,
            allChapters: allChapters,
            series: series,
            statusToString: statusToString
        });
    },

    loadChapterInfo: async (req, res) => {
        const chapter = await ChapterDao.get(req.params.id);
        const series = await SeriesDao.get(chapter.series);
        res.render('chapter-info', { user: req.user, chapter: chapter, series: series });
    },

    verifyChapter: async (req, res) => {
        await ChapterDao.verify(req.params.id);
        res.redirect('/manage-chapters');
    },

    rejectChapter: async (req, res) => {
        await ChapterDao.delete(req.params.id);
        res.redirect('/manage-chapters');
    }
}

var statusToString = function (status) {
    if (status == -1) return "Chưa duyệt";
    if (status == 1) return "Đã duyệt";
}