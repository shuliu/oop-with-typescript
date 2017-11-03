import { Candidate } from './../Candidate';
import { Config } from './../Config';
import { ConfigManager } from './../managers/ConfigManager';
import { FileHandler } from './../handlers/FileHandler';
import { HandlerInterface } from './../interface/HandlerInterface';
import { JsonManager } from './../managers/JsonManager';
import { Schedule } from './../Schedule';
import { ScheduleManager } from './../managers/ScheduleManager';

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

  // FindHandlers(candidate: Candidate) {
  //   let handlers:Array<HandlerInterface> = [];
  //   handlers.push(new FileHandler());
  //   handlers.push(new FileHandler());
  //   handlers.push(new FileHandler());
  //   handlers.push(new FileHandler());

  //   foreach(string handler in config.Handlers)
  //   {
  //   if (handler == "encode") {
  //   handlers.Add(new EncodeHandler());
  //   }
  //   else if (handler == "zip") {
  //   handlers.Add(new ZipEncoder());
  //   }
  //   }
  //   if (config.Destination == "directory") {
  //   handlers.Add(new DirectoryHandler());
  //   }
  //   return handlers;
  // }

}