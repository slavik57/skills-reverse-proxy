import {PathHelper} from './src/common/pathHelper';

interface ICertificate {
  keyFilePath: string,
  certificateFilePath: string
}

interface IAppConfig {
  port: number;
  certificate: ICertificate;
}

interface IEnvironmentConfig {
  appConfig: IAppConfig;
}

var config = {
  development: <IEnvironmentConfig>{
    appConfig: <IAppConfig>{
      port: 443,
      certificate: {
        keyFilePath: PathHelper.getPathFromRoot('ssl', 'development-localhost.key'),
        certificateFilePath: PathHelper.getPathFromRoot('ssl', 'development-localhost.cert')
      },
    }
  },
  tests: <IEnvironmentConfig>{
    appConfig: <IAppConfig>{
      port: 443,
      certificate: {
        keyFilePath: PathHelper.getPathFromRoot('ssl', 'development-localhost.key'),
        certificateFilePath: PathHelper.getPathFromRoot('ssl', 'development-localhost.cert')
      }
    }
  },

  currentEnvironment: 'tests',

  getCurrentEnvironment: function(): IEnvironmentConfig {
    var nodeEnviroment = process.env.NODE_ENV;
    if (nodeEnviroment !== undefined) {
      this.currentEnvironment = nodeEnviroment;
    }

    return this[this.currentEnvironment];
  }
}

export = config;
