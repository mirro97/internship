const ipModule       = require("ip");          // npm i ip
const express        = require('express');
const bodyParser     = require('body-parser');
const ExpressSession = require("express-session");
const MySQLStore     = require('express-mysql-session')(ExpressSession);
const expressAppUtil = {};
const mariaDB_ConnectionInfo = SYSTEM_CONFIG.DATABASE_MARIADB_CONNECTION_INFO;
module.exports = expressAppUtil;

expressAppUtil.getDefaultsessionOption = function () {
    var options = {
        key: 'session_cookie_name',
        secret: "session_cookie_secret",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 8 },
        //unset: 'destroy'
    };
    return options;
}

expressAppUtil.getDefaultMysqlSessionOption = function (options) {
    var sessionStore = new MySQLStore(mariaDB_ConnectionInfo);
    var sessionOption = Object.assign(expressAppUtil.getDefaultsessionOption(), options);
    sessionOption.store = sessionStore;
    sessionOption.cookie.secure = true;
    sessionOption.cookie.sameSite = true;
    return sessionOption;
}
expressAppUtil.getBaseAppObject = function (options = {}) {
    const app = express();
    app.use(bodyParser.urlencoded({
        extended: true,
        limit: '10mb',
        parameterLimit: 100000
    }));
    app.set('view engine', options.viewEngine || '');
    
    let serverIP = ipModule.address();
    app.use((req, res, next) => {
        if(req.headers.host.indexOf(serverIP) != -1) {
            console.log(req.headers.host)
            res.status(404).end('');
            return;
        }
        next();
    });
    // options.sessionOption && app.use(ExpressSession(options.sessionOption || this.getDefaultsessionOption()));
    expressAppUtil.setSession(app, options.sessionOption);
    return app;
}

expressAppUtil.setGlobalSession = function (sessionOption) {
    global.session = ExpressSession(sessionOption || this.getDefaultsessionOption())
}

expressAppUtil.setSession = function (app, sessionOption){
    let session;
    if(sessionOption) {
        session = ExpressSession(sessionOption || this.getDefaultsessionOption());
    } else {
        session = global.session;
    }
    session && app.use(session);
}

expressAppUtil.setStaticPath = function (app, webPath, dirPath) {
    app.use(webPath, express.static(dirPath));
}

expressAppUtil.getServiceData = function (req) {
    var inputData = req.body || req.query;
    var requestData = {
        searchFilter: inputData.searchFilter || {},
        insertData: inputData.insertData || {},
        updateData: inputData.updateData || {}
    };
    return requestData;
}

expressAppUtil.getRequestData = function (req) {
    var inputData = req.method == 'GET' ? req.query : req.body;
    return inputData;
}