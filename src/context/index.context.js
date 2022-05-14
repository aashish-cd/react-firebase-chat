import React, { createContext, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import app, { auth, signInWithGoogle, firestore } from '../firebase';

export const IndexContext = createContext();

export const useFirebase = () => {
  return useContext(IndexContext);
};

const IndexProvider = (props) => {
  const [user] = useAuthState(auth);

  const value = {
    user,
    auth,
    firestore,
    app,
    signInWithGoogle,
  };
  return (
    <IndexContext.Provider value={value}>
      {props.children}
    </IndexContext.Provider>
  );
};

export default IndexProvider;
