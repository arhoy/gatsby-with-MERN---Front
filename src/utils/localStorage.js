import { useEffect, useState } from 'react';

const getLocalStorage = () => {
  // Correct
  const [key, setKey] = useState(undefined);

  useEffect(() => {
    setKey(localStorage.getItem('token'));
  }, []);
  return key;
};

export { getLocalStorage };
