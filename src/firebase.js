import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyC5trEjWDwmHnJbdCdZHtNX1fkTK_z5YXY',
  authDomain: 'chat-app-e5fbb.firebaseapp.com',
  projectId: 'chat-app-e5fbb',
  storageBucket: 'chat-app-e5fbb.appspot.com',
  messagingSenderId: '16442086197',
  appId: '1:16442086197:web:20daf9fc1ce9fdd2a1b27c',
  measurementId: 'G-2VRLDWZC8N',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  } catch (error) {
    console.log(error);
  }
};
export default app;
