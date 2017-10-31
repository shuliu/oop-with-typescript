import * as fs from 'fs';

import { Schedule } from './Schedule';

export class ScheduleManager {
  public schedules: Array<Schedule> = [];
  constructor() {}

  ProcessSchedules() {
    let readConfig: any = fs.readFileSync('./config/Schedule.json', 'utf8');
    let ScheduleJson = JSON.parse(readConfig);
    console.log(ScheduleJson.schedules[0]);
    for (let index = 0; index < ScheduleJson.schedules.length; index++) {
      let schedule = new Schedule(ScheduleJson.schedules[index]);
      this.schedules.push(schedule);
    }

  }

  get Count() {
    if( typeof this.schedules.length === 'undefined' ) {
      return 0;
    }
    return this.schedules.length;
  }
}