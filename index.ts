import { ConfigManager } from './public/ConfigManager';

// import { ScheduleManager } from './public/ScheduleManager';

let myConfig = new ConfigManager();
let mySchedule = new ScheduleManager();
myConfig.setConfig();
mySchedule.setSchedule();

