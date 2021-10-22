const mongoose = require('mongoose');

const connectionString = process.env.DB_CONNECTION_STRING;

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
};

module.exports = () => {
    return mongoose.connect(connectionString, connectionOptions);
};