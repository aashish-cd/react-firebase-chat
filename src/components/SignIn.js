import React from 'react';
import { Button } from '../App';
import { useFirebase } from '../context/index.context';

const SignIn = () => {
  const { signInWithGoogle } = useFirebase();

  return (
    <div>
      <Button onClick={signInWithGoogle} user={true}>
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
