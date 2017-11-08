import { Candidate } from './../Candidate';
import { Config } from './../Config';
import { ConfigManager } from './../managers/ConfigManager';
import { DirectoryHandler } from './../handlers/DirectoryHandler';
import { EncodeHandler } from './../handlers/EncodeHandler';
import { FileHandler } from './../handlers/FileHandler';
import { HandlerInterface } from './../interface/HandlerInterface';
import { JsonManager } from './../managers/JsonManager';
import { Schedule } from './../Schedule';
import { ScheduleManager } from './../managers/ScheduleManager';
import { ZipHandler } from './../handlers/ZipHandler';

export class BackupService {

  private managers: Array<JsonManager> = [];

  constructor() {
    this.managers.push(new ConfigManager());
    this.managers.push(new ScheduleManager());
  }

  ProcessJsonConfigs() {
    this.managers.forEach(function(v, i){
      v.ProcessJsonConfig();
    });
  }

  DoBackup() {
    this.managers.forEach(function(v, i){
      console.log(v);
    });
  }

  private BroadcastToHanders(candidate: Candidate): void
  {
    let handlers: Array<HandlerInterface> = this.FindHandlers(candidate);
    let target: Uint8Array = null;
    for(let handler of handlers) {
      // target = handler.Perform(candidate, target);
    }
  }

  private FindFiles()
  {
    // Homework 4
  }

  private FindHandlers(candidate: Candidate) {
    let handlers: Array<HandlerInterface> = [];

    for(let handler of handlers) {
      if( handler === 'encode' ) {
        handlers.push(new EncodeHandler());
      }
      if (handler === "zip") {
        handlers.push(new ZipHandler());
      }
      // ...
    }
    // if (config.Destination == "directory") {
    //   handlers.push(new DirectoryHandler());
    // }

    return handlers;

  }

}