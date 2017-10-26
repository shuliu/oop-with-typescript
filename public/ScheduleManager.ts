import * as fs from 'fs';

import { Schedule } from './Schedule';

export class ScheduleManager {
  public schedules: Array<Schedule>;
  constructor() {}

  setSchedule() {
    let readSchedule: any = fs.readFileSync('/config/Schedule.json', 'utf8');
    let ScheduleJson = JSON.parse(readSchedule);
    this.schedules = configJson.Schedule;
    // return this.schedules;
  }
}