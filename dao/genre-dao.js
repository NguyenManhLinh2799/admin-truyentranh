var genreModel = require('../model/genre-model');

class GenreDao {
    static getAll() {
        return genreModel.find({});
    }

    static get(id)
    {
        return genreModel.findOne({ _id: id });
    }
}

module.exports = GenreDao;