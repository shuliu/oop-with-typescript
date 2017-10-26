import * as fs from 'fs';

import { Config } from './Config';

export class ConfigManager {
  public configs: Array<Config>;
  constructor() {}

  setConfig() {
    let readConfig: any = fs.readFileSync('./config/config.json', 'utf8');
    let configJson = JSON.parse(readConfig);
    this.configs = configJson.configs;
    // return this.configs;
  }

}