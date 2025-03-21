import {
  onBackUpData,
  onRestoreData,
} from '../../application/libs/local-storage/backup-restore';

const useProfile = () => {
  return {onBackUpData, onRestoreData};
};

export default useProfile;
