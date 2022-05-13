import React, { useContext } from 'react';
import { Button } from '../App';
import { IndexContext } from '../context/index.context';

const SignIn = () => {
  const { firebase, auth } = useContext(IndexContext);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <Button onClick={signInWithGoogle} user={true}>
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
