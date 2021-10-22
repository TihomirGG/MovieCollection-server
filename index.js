require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

require('./config/database')()
    .then(_ => {
        require('./config/express')(express, app);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch(console.log);
