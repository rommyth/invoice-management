import {useCallback, useRef, useState} from 'react';
import Share from 'react-native-share';

const useShareProductCatalog = () => {
  const ref = useRef<any>(null);

  const [columns, setColumns] = useState<1 | 3>(1);

  const onShare = useCallback(() => {
    ref.current.capture().then((uri: any) => {
      Share.open({
        title: 'Katalog',
        url: uri,
      });
    });
  }, []);

  return {ref, columns, setColumns, onShare};
};

export default useShareProductCatalog;
