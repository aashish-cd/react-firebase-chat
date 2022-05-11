import React, { useContext } from 'react';
import { IndexContext } from './context/index.context';

const Wrapper = ({ children }) => {
  const { loading, setLoading } = useContext(IndexContext);

  return <div>{children}</div>;
};

export default Wrapper;
