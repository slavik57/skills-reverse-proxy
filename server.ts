import * as EnviromentConfig from './environment';
const redbird = require('redbird');

var redbirdServer = new redbird({
  port: 8080,
  secure: false,
  ssl: {
    port: EnviromentConfig.getCurrentEnvironment().appConfig.port,
    key: EnviromentConfig.getCurrentEnvironment().appConfig.certificate.keyFilePath,
    cert: EnviromentConfig.getCurrentEnvironment().appConfig.certificate.certificateFilePath,
  }
});

redbirdServer.register('localhost', 'https://127.0.0.1:8020', { ssl: true });
redbirdServer.register('localhost/api', 'https://127.0.0.1:8021', { ssl: true });
