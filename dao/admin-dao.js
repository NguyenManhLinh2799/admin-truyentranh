var adminModel = require('../model/admin-model');

class AdminDao {
    static get(id)
    {
        return adminModel.findOne({ _id: id });
    }

    static getByEmail(email)
    {
        return adminModel.findOne({ email: email });
    }

    static async update(id, name)
    {
        var admin = await adminModel.findOne(id);
        admin.name = name;
        admin.save();
    }
}

module.exports = AdminDao;