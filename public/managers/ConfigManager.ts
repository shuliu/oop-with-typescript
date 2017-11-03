import * as fs from 'fs';

import { Config } from './../Config';
import { JsonManager } from './JsonManager';

export class ConfigManager extends JsonManager {
  private configs: Array<Config> = [];
  private path: string = './config/config.json';

  ProcessJsonConfig() {
    let configObject = this.GetJsonObject(this.path);
    for (let index = 0; index < configObject.configs.length; index++) {
      let config = new Config(configObject.configs[index]);
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