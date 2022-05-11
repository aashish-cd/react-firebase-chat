import { useContext } from 'react';
import styled from 'styled-components';

import ChatBox from './components/ChatBox';
import SignIn from './components/SignIn';
import { IndexContext } from './context/index.context';

function App() {
  const { user } = useContext(IndexContext);
  return (
    <div className='App'>
      <Header>
        <h1>Simple chat app build with react and firebase</h1>
        <Button user={user}>{user ? 'Sign Out' : 'Sign In'}</Button>
      </Header>
      <RootContainer>
        {user ? <ChatBox /> : <SignIn user={user} />}
      </RootContainer>
    </div>
  );
}

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 1.5rem;
    color: #0084ff;
    text-transform: uppercase;
    text-align: center;
  }
`;
export const Button = styled.button`
  width: auto;
  padding: 0.5rem 1rem;
  transition: 0.5s;
  font-size: 1.2rem;
  background-color: ${({ user }) => (user ? '#0084ff' : '#ff0000')};
  color: white;
  cursor: pointer;
  border: ${({ user }) => (user ? '#0084ff' : '#ff0000')} solid 1px;
  border-radius: 5px;
  &:hover {
    transition: 0.5s;
    background-color: white;
    color: ${({ user }) => (user ? '#0084ff' : '#ff0000')};
  }
`;

export default App;
