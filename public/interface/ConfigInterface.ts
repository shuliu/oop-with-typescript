
/** config interface */
export interface ConfigInterface {
  ext: string;
  location: string;
  subDirectory: boolean;
  unit: string;
  remove: boolean;
  handler: Array<string>;
  destination: string;
  dir: string;
  connectionString: string;
}
