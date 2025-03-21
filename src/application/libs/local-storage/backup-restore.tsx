import RNFS from 'react-native-fs';
import moment from 'moment';
import Toast from 'react-native-simple-toast';
import {storage} from './storage';
import {pick, types} from '@react-native-documents/picker';

export const onBackUpData = async () => {
  const date = new Date();
  try {
    // Get all keys from MMKV
    const keys: any = storage.getAllKeys();

    // Create an object to store key-value pairs
    const backup: any = {};

    keys.forEach((key: any) => {
      backup[key] =
        storage.getString(key) ||
        storage.getNumber(key) ||
        storage.getBoolean(key);
    });

    // Convert the backup object to a JSON string
    const backupString = JSON.stringify(backup);

    // Define the file name
    const fileName = `Backup_CRKJ_SYS_${moment(date.toISOString()).format(
      'DD_MMMM_YYYY',
    )}_${date.getTime()}`;

    // Define the file path
    const filePath = `${RNFS.DocumentDirectoryPath}/${fileName}.json`;

    // Write the backup to a file
    await RNFS.writeFile(filePath, backupString, 'utf8');

    const destinationPath = `${RNFS.DownloadDirectoryPath}/${fileName}.json`;

    await RNFS.copyFile(filePath, destinationPath);

    console.log('Backup saved at:', filePath);

    Toast.show(`Backup created\n/Download/${fileName}}`, Toast.LONG);

    // Optionally, share the file or save it to cloud storage
  } catch (error) {
    console.error('Backup failed:', error);
  }
};

export const onRestoreData = async () => {
  try {
    const res = await pick({
      type: [types.allFiles],
    });

    const backupFilePath = res[0]?.uri;
    const jsonData = await RNFS.readFile(backupFilePath, 'utf8');
    const parsedData = JSON.parse(jsonData);

    // 3️⃣ Restore data into MMKV storage
    Object.keys(parsedData).forEach(key => {
      const value = parsedData[key];

      if (typeof value === 'string') {
        storage.set(key, value);
      } else if (typeof value === 'number') {
        storage.set(key, value);
      } else if (typeof value === 'boolean') {
        storage.set(key, value);
      }
    });
    Toast.show('Restore successful!', Toast.LONG);
  } catch (error) {
    console.error('File picker error:', error);
    Toast.show('Restore failed!', Toast.LONG);
  }
};
