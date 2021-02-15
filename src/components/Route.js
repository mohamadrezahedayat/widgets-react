import { useEffect, useState } from 'react';

export default function Route({ path, children }) {
  const [currentPath, setcurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setcurrentPath(window.location.pathname);
      console.log('location change');
    };

    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
}
