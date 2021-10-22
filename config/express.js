const cors = require('cors');
module.exports = (express, app) => {
    app.use(cors({origin: 'http://localhost:3000'}));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    // app.use('/user', userRouter)
    // app.use(cookieParser());
};
