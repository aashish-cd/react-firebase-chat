import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  //config here
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <>
      <h1> hello</h1>
    </>
  );
}

export default App;
