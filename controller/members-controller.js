var MemberDao = require('../dao/member-dao');
var CommentDao = require('../dao/comment-dao');
var SeriesDao = require('../dao/series-dao');

module.exports = {
    loadManageMembers: async (req, res) => {
        const allMembers = await MemberDao.getAll();
        res.render('manage-members', { allMembers: allMembers });
    },

    loadMemberInfo: async (req, res) => {
        const member = await MemberDao.get(req.params.id);
        const comments = await CommentDao.getAllByMember(member._id);
        var series = [];
        for (const comment of comments)
        {
            const s = await SeriesDao.get(comment.series);
            series.push(s);
        }
        res.render('member-info', { member: member, comments: comments, series: series });
    }
}