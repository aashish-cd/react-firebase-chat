import React from 'react';
import { Button } from '../App';

const SignIn = ({ user }) => {
  const HandleLogin = () => {
    return;
  };
  return (
    <div>
      <Button onClick={HandleLogin} user={true}>
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
