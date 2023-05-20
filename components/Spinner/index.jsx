import React from 'react';
import { bool } from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import { wrap } from './styles';

const Spinner = (props) => {
  const { loading } = props;
  return (
    <>
      {loading ? (
        <div css={wrap}>
          <CircularProgress />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

Spinner.propTypes = {
  loading: bool.isRequired,
};

export default Spinner;
