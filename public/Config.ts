
/** config interface */
interface configInterface {
  ext: string;
  location: string;
  subDirectory: boolean;
  unit: boolean;
  remove: boolean;
  handler: string;
  destination: string;
  dir: string;
  connectionString: string;

}

/**
 * Config class
 */
export class Config {
  private ext: string;
  private location: string;
  private subDirectory: boolean;
  private unit: boolean;
  private remove: boolean;
  private handler: string;
  private destination: string;
  private dir: string;
  private connectionString: string;

  constructor(option: configInterface) {
    this.ext = option.ext;
    this.location = option.location;
    this.subDirectory = option.subDirectory;
    this.unit = option.unit;
    this.remove = option.remove;
    this.handler = option.handler;
    this.destination = option.destination;
    this.dir = option.dir;
    this.connectionString = option.connectionString;
  }

  get getExt() { return this.ext; }
  get getLocation() { return this.location; }
  get getSubDirectory() { return this.subDirectory; }
  get getUnit() { return this.unit; }
  get getRemove() { return this.remove; }
  get getHandler() { return this.handler; }
  get getDestination() { return this.destination; }
  get getDir() { return this.dir; }
  get getConnectionString() { return this.connectionString; }


}