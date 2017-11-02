import * as fs from 'fs';

import { JsonManager } from './JsonManager';
import { Schedule } from './Schedule';

export class ScheduleManager extends JsonManager {
  public schedules: Array<Schedule> = [];

  ProcessSchedules() {
    let readSchedule = this.GetJsonObject('./config/Schedule.json');
    for (let index = 0; index < readSchedule.schedules.length; index++) {
      let schedule = new Schedule(readSchedule.schedules[index]);
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