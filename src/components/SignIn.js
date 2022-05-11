import React, { useContext } from 'react';
import { Button } from '../App';
import { IndexContext } from '../context/index.context';

const SignIn = () => {
  const { firebase, auth } = useContext(IndexContext);
  const SignIn = () => {
    // const provider = new firebase.auth.GoogleAuthProvider(auth);
    // auth.SignInWithPopup(provider);
  };
  return (
    <div>
      <Button onClick={SignIn} user={true}>
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
