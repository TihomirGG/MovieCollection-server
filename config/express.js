const cors = require('cors');
const movieRouter = require('../routes/movieRoutes')
module.exports = (express, app) => {
    app.use(cors({origin: 'http://localhost:3000'}));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use('/', movieRouter)
    // app.use(cookieParser());
};
