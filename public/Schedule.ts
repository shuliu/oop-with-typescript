import { ScheduleInterface } from './interface/ScheduleInterface';

/**
 * Schedule class
 */
export class Schedule {
  private ext: string;
  private time: string;
  private interval: string;

  constructor(option: ScheduleInterface) {
    this.ext = option.ext;
    this.time = option.time;
    this.interval = option.interval;
  }

  get getExt() { return this.ext; }
  get getTime() { return this.time; }
  get getInterval() { return this.interval; }


}