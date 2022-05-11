import React from 'react';
import styled from 'styled-components';
import useWindowWidth from '../customHooks/useWindowWidth';
import Message from './Message';

const ChatBox = () => {
  const width = useWindowWidth();

  return (
    <>
      <Container width={width}>
        <Message messageType='sent' />
        <Message messageType='received' />
        <Message messageType='sent' />
        <Message messageType='received' />
        <Message messageType='sent' />
        <Message messageType='received' />
        <Message messageType='received' />
        <Message messageType='sent' />
        <Message messageType='sent' />
        <Message messageType='sent' />
      </Container>
      <InputContainer>
        <Input type={'text'} placeholder='Write message here...' />
        <Button>Send</Button>
      </InputContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  /* height: ${({ width }) => (width > 768 ? '80vh' : '70vh')}; */
  background-color: white;
`;

const InputContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 80%;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: #0084ff solid 2px;
  ::placeholder {
    color: #0084ff;
  }
`;

export const Button = styled.button`
  transition: 0.5s;
  /* width: 20%; */
  padding: 0.5rem 1rem;
  background-color: #0084ff;
  color: white;
  cursor: pointer;
  border: #0084ff solid 1px;
  border-radius: 5px;
  &:hover {
    transition: 0.5s;
    background-color: white;
    color: #0084ff;
  }
`;
export default ChatBox;
