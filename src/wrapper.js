import React, { useContext } from 'react';
import { IndexContext } from './context/index.context';

const Wrapper = ({ children }) => {
  const { loading, setLoading, user, auth, app, analytics, firestore } =
    useContext(IndexContext);

  return <div>{children}</div>;
};

export default Wrapper;
