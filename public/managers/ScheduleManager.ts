import * as fs from 'fs';

import { JsonManager } from './JsonManager';
import { Schedule } from './../Schedule';

export class ScheduleManager extends JsonManager {
  private schedules: Array<Schedule> = [];
  private path: string = './config/Schedule.json';

  ProcessJsonConfig() {
    let scheduleObject = this.GetJsonObject(this.path);
    for (let index = 0; index < scheduleObject.schedules.length; index++) {
      let schedule = new Schedule(scheduleObject.schedules[index]);
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