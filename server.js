"use strict";
var EnviromentConfig = require('./environment');
var redbird = require('redbird');
var secure = EnviromentConfig.getCurrentEnvironment() !== EnviromentConfig.development;
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
redbirdServer.register(EnviromentConfig.getCurrentEnvironment().appConfig.host, EnviromentConfig.getCurrentEnvironment().redirectConfig.applicationServerUrl, { ssl: true });
redbirdServer.register(EnviromentConfig.getCurrentEnvironment().appConfig.host + '/api', EnviromentConfig.getCurrentEnvironment().redirectConfig.serverUrl, { ssl: true });
redbirdServer.register('slava-y50', EnviromentConfig.getCurrentEnvironment().redirectConfig.applicationServerUrl, { ssl: true });
redbirdServer.register('slava-y50' + '/api', EnviromentConfig.getCurrentEnvironment().redirectConfig.serverUrl, { ssl: true });
//# sourceMappingURL=server.js.map