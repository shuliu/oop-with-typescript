import { BackupService } from './public/services/BackupService';

let myBackupService = new BackupService();
myBackupService.ProcessJsonConfigs();
myBackupService.DoBackup();
