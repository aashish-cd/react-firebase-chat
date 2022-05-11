import React, { createContext, useState } from 'react';

export const IndexContext = createContext();

const IndexProvider = (props) => {
  const [loading, setLoading] = useState(false);
  return (
    <IndexContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </IndexContext.Provider>
  );
};

export default IndexProvider;
