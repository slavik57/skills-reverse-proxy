"use strict";
var EnviromentConfig = require('./environment');
var redbird = require('redbird');
var secure = EnviromentConfig.getCurrentEnvironment() !== EnviromentConfig.development &&
    EnviromentConfig.getCurrentEnvironment() !== EnviromentConfig.tests;
console.log('Using secure https: ' + secure);
var redbirdServer = new redbird({
    port: 8080,
    secure: secure,
    ssl: {
        port: EnviromentConfig.getCurrentEnvironment().appConfig.port,
        key: EnviromentConfig.getCurrentEnvironment().appConfig.certificate.keyFilePath,
        cert: EnviromentConfig.getCurrentEnvironment().appConfig.certificate.certificateFilePath,
    }
});
redbirdServer.register('localhost', 'https://127.0.0.1:8020', { ssl: true });
redbirdServer.register('localhost/api', 'https://127.0.0.1:8021', { ssl: true });
//# sourceMappingURL=server.js.map