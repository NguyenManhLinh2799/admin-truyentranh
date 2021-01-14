var memberModel = require('../model/member-model');

class MemberDao {
    static getAll() {
        return memberModel.find({});
    }

    static get(id)
    {
        return memberModel.findOne({ _id: id });
    }
}

module.exports = MemberDao;