import React, { useContext } from 'react';
import { Button } from '../App';
import { IndexContext } from '../context/index.context';

const SignIn = () => {
  const { app, auth } = useContext(IndexContext);
  const SignIn = () => {
    const provider = new app.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
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
