import { ScheduleInterface } from './interface/ScheduleInterface';

/**
 * Schedule class
 */
export class Schedule {
  private readonly ext: string;
  private readonly time: string;
  private readonly interval: string;

  constructor(option: ScheduleInterface) {
    this.ext = option.ext;
    this.time = option.time;
    this.interval = option.interval;
  }

  get Ext() { return this.ext; }
  get Time() { return this.time; }
  get Interval() { return this.interval; }


}