import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { InitialLoader } from '@components/ui';
import './styles/global.css';

const Root = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    let hasLoaded = document.readyState === 'complete';
    let minimumDurationElapsed = false;
    const finishLoading = () => {
      if (hasLoaded && minimumDurationElapsed) {
        setIsInitialLoad(false);
      }
    };
    const handleLoad = () => {
      hasLoaded = true;
      finishLoading();
    };
    const minimumDurationTimer = window.setTimeout(() => {
      minimumDurationElapsed = true;
      finishLoading();
    }, 3000);

    if (!hasLoaded) {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      window.clearTimeout(minimumDurationTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <App />
      {isInitialLoad && <InitialLoader />}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
