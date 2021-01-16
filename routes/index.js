var express = require('express');
var router = express.Router();

var dashboardController = require('../controller/dashboard-controller');
var membersController = require('../controller/members-controller');
var seriesController = require('../controller/series-controller');
var chaptersController = require('../controller/chapters-controller');
var reportsController = require('../controller/reports-controller');
var adminController = require('../controller/admin-controller');

/* GET home page. */
router.get('/', dashboardController.loadDashboard);

// Manage members
router.get('/manage-members', membersController.loadManageMembers);

// Manage series
router.get('/manage-series', seriesController.loadManageSeries);

// Manage chapters
router.get('/manage-chapters', chaptersController.loadManageChapters);

// Reports
router.get('/reports', reportsController.loadReports);

// Admin info
router.get('/admin-info', adminController.loadAdminInfo);

// Member info
router.get('/member-info/:id', membersController.loadMemberInfo);

// Series info
router.get('/series-info/:id', seriesController.loadSeriesInfo);

// Chapter info
router.get('/chapter-info/:id', chaptersController.loadChapterInfo);

// Report series
router.get('/report-series/:id', reportsController.loadReportSeries);

// Report comment
router.get('/report-comment/:id', reportsController.loadReportComment);

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