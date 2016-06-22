"use strict";
var pathHelper_1 = require('./src/common/pathHelper');
var config = {
    development: {
        appConfig: {
            port: 443,
            certificate: {
                keyFilePath: pathHelper_1.PathHelper.getPathFromRoot('ssl', 'development-localhost.key'),
                certificateFilePath: pathHelper_1.PathHelper.getPathFromRoot('ssl', 'development-localhost.cert')
            },
        }
    },
    tests: {
        appConfig: {
            port: 443,
            certificate: {
                keyFilePath: pathHelper_1.PathHelper.getPathFromRoot('ssl', 'development-localhost.key'),
                certificateFilePath: pathHelper_1.PathHelper.getPathFromRoot('ssl', 'development-localhost.cert')
            }
        }
    },
    currentEnvironment: 'tests',
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