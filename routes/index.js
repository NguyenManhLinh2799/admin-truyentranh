var express = require('express');
var router = express.Router();

var dashboardController = require('../controller/dashboard-controller');
var membersController = require('../controller/members-controller');
var seriesController = require('../controller/series-controller');
var chaptersController = require('../controller/chapters-controller');
var reportsController = require('../controller/reports-controller');

var { ensureAuthenticated } = require('../config/auth');

/* GET home page. */
router.get('/', ensureAuthenticated, dashboardController.loadDashboard);

// Manage members
router.get('/manage-members', ensureAuthenticated, membersController.loadManageMembers);

// Manage series
router.get('/manage-series', ensureAuthenticated, seriesController.loadManageSeries);

// Manage chapters
router.get('/manage-chapters', ensureAuthenticated, chaptersController.loadManageChapters);

// Reports
router.get('/reports', ensureAuthenticated, reportsController.loadReports);

// Member info
router.get('/member-info/:id', ensureAuthenticated, membersController.loadMemberInfo);

// Series info
router.get('/series-info/:id', ensureAuthenticated, seriesController.loadSeriesInfo);

// Chapter info
router.get('/chapter-info/:id', ensureAuthenticated, chaptersController.loadChapterInfo);

// Report series
router.get('/report-series/:id', ensureAuthenticated, reportsController.loadReportSeries);

// Report comment
router.get('/report-comment/:id', ensureAuthenticated, reportsController.loadReportComment);

// Ban member
router.get('/ban-member/:id', membersController.banMember);

// Unban member
router.get('/unban-member/:id', membersController.unbanMember);

// Verify series
router.get('/verify-series/:id', seriesController.verifySeries);

// Reject series
router.get('/reject-series/:id', seriesController.rejectSeries);

// Verify chapter
router.get('/verify-chapter/:id', chaptersController.verifyChapter);

// Reject chapter
router.get('/reject-chapter/:id', chaptersController.rejectChapter);

// Dismiss report series
router.get('/dismiss-report-series/:id', reportsController.dismissReportSeries);

// Dismiss report comment
router.get('/dismiss-report-comment/:id', reportsController.dismissReportComment);

module.exports = router;