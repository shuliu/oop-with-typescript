import * as fs from 'fs';

import { Schedule } from './Schedule';

export class ScheduleManager {
  public schedules: Array<Schedule>;
  constructor() {}

  Schedule() {
    let readSchedule: any = fs.readFileSync('./config/Schedule.json', 'utf8');
    let ScheduleJson = JSON.parse(readSchedule);
    this.schedules = ScheduleJson.Schedule;
  }

  get Count() {
    return this.schedules.length;
  }

}