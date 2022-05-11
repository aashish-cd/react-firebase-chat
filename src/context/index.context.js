import React, { createContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

//firebase config file
const firebaseConfig = {
  apiKey: 'AIzaSyC5trEjWDwmHnJbdCdZHtNX1fkTK_z5YXY',
  authDomain: 'chat-app-e5fbb.firebaseapp.com',
  projectId: 'chat-app-e5fbb',
  storageBucket: 'chat-app-e5fbb.appspot.com',
  messagingSenderId: '16442086197',
  appId: '1:16442086197:web:20daf9fc1ce9fdd2a1b27c',
  measurementId: 'G-2VRLDWZC8N',
};

//initialize firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export const IndexContext = createContext();

const IndexProvider = (props) => {
  const [loading, setLoading] = useState(false);

  const [user] = useAuthState(auth);
  return (
    <IndexContext.Provider
      value={{ loading, setLoading, user, auth, app, analytics, firestore }}
    >
      {props.children}
    </IndexContext.Provider>
  );
};

export default IndexProvider;
