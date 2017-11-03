import * as fs from 'fs';

export abstract class JsonManager
{
  constructor() {}
  GetJsonObject(path: string) {
    let configValue: any = fs.readFileSync(path, 'utf8');
    let JsonConvert = JSON.parse(configValue);
    return JsonConvert;

  }

    public abstract ProcessJsonConfig(): void;
}