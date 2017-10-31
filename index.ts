import { Config } from './public/Config';
import { ConfigManager } from './public/ConfigManager';
import { Schedule } from './public/Schedule';
import { ScheduleManager } from './public/ScheduleManager';

let myConfig = new ConfigManager();
let mySchedule = new ScheduleManager();
myConfig.ProcessConfigs();
mySchedule.ProcessSchedules();

for (let index = 0; index <  myConfig.Count; index++) {
  let element = myConfig.configs[index];

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
  console.log('==============');

}

for (let index = 0; index <  mySchedule.Count; index++) {
  let element = mySchedule.schedules[index];

  let ext = element.Ext;
  let time = element.Time;
  let interval = element.Interval;

  console.log(element.Ext);
  console.log('==============');

}
