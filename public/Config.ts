import { ConfigInterface } from './interface/ConfigInterface';

/**
 * Config class
 */
export class Config {
  private readonly ext: string;
  private readonly location: string;
  private readonly subDirectory: boolean;
  private readonly unit: string;
  private readonly remove: boolean;
  private readonly handler: string;
  private readonly destination: string;
  private readonly dir: string;
  private readonly connectionString: string;

  constructor(option: ConfigInterface) {
    // console.log(option);
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

  get Ext() { return this.ext; }
  get Location() { return this.location; }
  get SubDirectory() { return this.subDirectory; }
  get Unit() { return this.unit; }
  get Remove() { return this.remove; }
  get Handler() { return this.handler; }
  get Destination() { return this.destination; }
  get Dir() { return this.dir; }
  get ConnectionString() { return this.connectionString; }


}