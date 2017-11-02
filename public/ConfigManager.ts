import * as fs from 'fs';

import { Config } from './Config';
import { JsonManager } from './JsonManager';

export class ConfigManager extends JsonManager {
  public configs: Array<Config> = [];

  ProcessConfigs() {
    let readConfig = this.GetJsonObject('./config/config.json');
    for (let index = 0; index < readConfig.configs.length; index++) {
      let config = new Config(readConfig.configs[index]);
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