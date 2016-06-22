import {PathHelper} from './src/common/pathHelper';

interface ICertificate {
  keyFilePath: string,
  certificateFilePath: string
}

interface IAppConfig {
  port: number;
  host: string;
  certificate: ICertificate;
}

interface IRedirectConfig {
  applicationServerUrl: string;
  serverUrl: string;
}

interface IEnvironmentConfig {
  appConfig: IAppConfig;
  redirectConfig: IRedirectConfig;
}

var config = {
  development: <IEnvironmentConfig>{
    appConfig: <IAppConfig>{
      port: 443,
      host: 'localhost',
      certificate: {
        keyFilePath: PathHelper.getPathFromRoot('ssl', 'development-localhost.key'),
        certificateFilePath: PathHelper.getPathFromRoot('ssl', 'development-localhost.cert')
      }
    },
    redirectConfig: {
      applicationServerUrl: 'https://localhost:8020',
      serverUrl: 'https://localhost:8021'
    }
  },

  currentEnvironment: 'development',

  getCurrentEnvironment: function(): IEnvironmentConfig {
    var nodeEnviroment = process.env.NODE_ENV;
    if (nodeEnviroment !== undefined) {
      this.currentEnvironment = nodeEnviroment;
    }

    return this[this.currentEnvironment];
  }
}

export = config;
