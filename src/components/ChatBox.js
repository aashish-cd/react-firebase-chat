import React from 'react';
import styled from 'styled-components';
import useWindowWidth from '../customHooks/useWindowWidth';
import Message from './Message';

const ChatBox = () => {
  const width = useWindowWidth();

  return (
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
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: ${({ width }) => (width > 768 ? '80vh' : '70vh')};
  background-color: blue;
`;

export default ChatBox;
