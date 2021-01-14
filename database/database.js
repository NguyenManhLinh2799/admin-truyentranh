let mongoose = require('mongoose');

const mongdodb_url = 'mongodb+srv://user:user@cluster0.6spzr.mongodb.net/readmanga?retryWrites=true&w=majority';

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(mongdodb_url, { useUnifiedTopology: true, useNewUrlParser: true })
            .then(() => {
                console.log('Database connection successfully!');
            })
            .catch(err => {
                console.log('Database connection error!');
            })
    }
}

module.exports = new Database();