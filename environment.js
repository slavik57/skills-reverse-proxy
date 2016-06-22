"use strict";
var pathHelper_1 = require('./src/common/pathHelper');
var config = {
    development: {
        appConfig: {
            port: 443,
            host: 'localhost',
            certificate: {
                keyFilePath: pathHelper_1.PathHelper.getPathFromRoot('ssl', 'development-localhost.key'),
                certificateFilePath: pathHelper_1.PathHelper.getPathFromRoot('ssl', 'development-localhost.cert')
            }
        },
        redirectConfig: {
            applicationServerUrl: 'https://localhost:8020',
            serverUrl: 'https://localhost:8021'
        }
    },
    currentEnvironment: 'development',
    getCurrentEnvironment: function () {
        var nodeEnviroment = process.env.NODE_ENV;
        if (nodeEnviroment !== undefined) {
            this.currentEnvironment = nodeEnviroment;
        }
        return this[this.currentEnvironment];
    }
};
module.exports = config;
//# sourceMappingURL=environment.js.map