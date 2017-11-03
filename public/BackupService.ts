import { Config } from './Config';
import { ConfigManager } from './managers/ConfigManager';
import { JsonManager } from './managers/JsonManager';
import { Schedule } from './Schedule';
import { ScheduleManager } from './managers/ScheduleManager';

export class BackupService {

  private configManager: ConfigManager;
  private scheduleManager: ScheduleManager;

  private managers: Array<JsonManager> = [];

  constructor() {

    this.managers.push(new ConfigManager());
    this.managers.push(new ScheduleManager());
  }

  ProcessJsonConfigs() {

    this.managers.forEach(function(v, i){
      v.ProcessJsonConfig();
    });

  }

}