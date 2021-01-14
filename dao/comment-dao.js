var commentModel = require('../model/comment-model');

class CommentDao {
    static getAll() {
        return commentModel.find({});
    }

    static get(id)
    {
        return commentModel.findOne({ _id: id });
    }

    static getAllBySeries(seriesID)
    {
        return commentModel.find({ series: seriesID });
    }

    static getAllByMember(memberID)
    {
        return commentModel.find({ member: memberID });
    }
}

module.exports = CommentDao;