var memberModel = require('../model/member-model');

class MemberDao {
    static getAll() {
        return memberModel.find({});
    }

    static get(id)
    {
        return memberModel.findOne({ _id: id });
    }

    static async ban(id)
    {
        var member = await this.get(id);
        member.isBanned = true;
        member.save();
    }

    static async unban(id)
    {
        var member = await this.get(id);
        member.isBanned = false;
        member.save();
    }
}

module.exports = MemberDao;