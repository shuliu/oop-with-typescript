import { Config } from './Config';
import { ConfigManager } from './managers/ConfigManager';
import { JsonManager } from './managers/JsonManager';
import { Schedule } from './Schedule';
import { ScheduleManager } from './managers/ScheduleManager';

export class BackupService {

  private myConfig;
  private mySchedule;

  private managers: JsonManager;

  constructor() {
    this.myConfig = new ConfigManager();
    this.mySchedule = new ScheduleManager();
  }

  ProcessJSONConfig() {
    this.myConfig.ProcessJsonConfig();
    this.mySchedule.ProcessJsonConfig();
  }

  DoBackup() {

    for (let index = 0; index <  this.myConfig.Count; index++) {
      let element = this.myConfig.configs[index];

      let ext = element.Ext;
      let location = element.Location;
      let subDirectory = element.SubDirectory;
      let unit = element.Unit;
      let remove = element.Remove;
      let handler = element.Handler;
      let destination = element.Destination;
      let dir = element.Dir;
      let connectionString = element.ConnectionString;

      console.log(element.Ext);

    }

    for (let index = 0; index <  this.mySchedule.Count; index++) {
      let element = this.mySchedule.schedules[index];

      let ext = element.Ext;
      let time = element.Time;
      let interval = element.Interval;

      console.log(element.Ext);

    }

  }
}