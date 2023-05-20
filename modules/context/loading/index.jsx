import React from 'react';
import Spinner from '@components/Spinner';
import { node } from 'prop-types';

const LoadingContext = React.createContext({
  loading: false,
  setLoading: () => {},
});

const LoadingProvider = ({ children }) => {
  const [loading, updateLoadingState] = React.useState(false);

  const setLoading = (param) => {
    if (param) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    updateLoadingState(param);
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <Spinner loading={loading} />
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: node.isRequired,
};

export { LoadingProvider, LoadingContext };
