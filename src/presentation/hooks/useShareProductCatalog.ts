import {useState} from 'react';

const useShareProductCatalog = () => {
  const [columns, setColumns] = useState<1 | 3>(1);

  return {columns, setColumns};
};

export default useShareProductCatalog;
