import * as fs from 'fs';

import { Config } from './Config';

export class ConfigManager {
  public configs: Array<Config> = [];
  constructor() {}

  ProcessConfigs() {
    let readConfig: any = fs.readFileSync('./config/config.json', 'utf8');
    let configJson = JSON.parse(readConfig);
    for (let index = 0; index < configJson.configs.length; index++) {
      let config = new Config(configJson.configs[index]);
      this.configs.push(config);
    }

  }

  get Count() {
    if( typeof this.configs.length === 'undefined' ) {
      return 0;
    }
    return this.configs.length;
  }

}