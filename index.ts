import { BackupService } from './public/BackupService';

let myBackupService = new BackupService();
myBackupService.ProcessJSONConfig();
myBackupService.DoBackup();
