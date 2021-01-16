var ReportCommentDao = require('../dao/report-comment-dao');
var ReportSeriesDao = require('../dao/report-series-dao');
var CommentDao = require('../dao/comment-dao');
var SeriesDao = require('../dao/series-dao');
var MemberDao = require('../dao/member-dao');

module.exports = {
    loadReports: async (req, res) => {
        const allReportComments = await ReportCommentDao.getAll();
        const allReportSeries = await ReportSeriesDao.getAll();

        var comments = [];
        var commentsReportedBy = [];
        for (const report of allReportComments)
        {
            comments.push(await CommentDao.get(report.comment));
            commentsReportedBy.push(await MemberDao.get(report.reportedBy));
        }

        var series = [];
        var seriesReportedBy = [];
        for (const report of allReportSeries)
        {
            series.push(await SeriesDao.get(report.series));
            seriesReportedBy.push(await MemberDao.get(report.reportedBy));
        }

        res.render('reports', {
            allReportComments: allReportComments,
            allReportSeries: allReportSeries,
            comments: comments,
            commentsReportedBy: commentsReportedBy,
            series: series,
            seriesReportedBy: seriesReportedBy
        });
    },

    loadReportComment: async (req, res) => {
        const reportComment = await ReportCommentDao.get(req.params.id);
        const comment = await CommentDao.get(reportComment.comment);
        const commentedBy = await MemberDao.get(comment.member);
        const reportedBy = await MemberDao.get(reportComment.reportedBy);

        res.render('report-comment', {
            reportComment: reportComment,
            comment: comment,
            commentedBy: commentedBy,
            reportedBy: reportedBy
        });
    },

    loadReportSeries: async (req, res) => {
        const reportSeries = await ReportSeriesDao.get(req.params.id);
        const series = await SeriesDao.get(reportSeries.series);
        const postedBy = await MemberDao.get(series.postedBy);
        const reportedBy = await MemberDao.get(reportSeries.reportedBy);

        res.render('report-series', {
            reportSeries: reportSeries,
            series: series,
            postedBy: postedBy,
            reportedBy: reportedBy
        });
    },

    dismissReportSeries: async (req, res) => {
        await ReportSeriesDao.delete(req.params.id);
        res.redirect('/reports');
    },

    dismissReportComment: async (req, res) => {
        await ReportCommentDao.delete(req.params.id);
        res.redirect('/reports');
    }
}