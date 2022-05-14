import React from 'react';
import styled from 'styled-components';

const Message = ({ messageType, message, photoURL }) => {
  // console.log(type);
  return (
    <Container messageType={messageType}>
      <TextMessage messageType={messageType}>
        {messageType === 'received' && <img src={photoURL} alt='profile' />}
        <Text messageType={messageType}>{message}</Text>
        {messageType === 'sent' && <img src={photoURL} alt={'profile'} />}
      </TextMessage>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  color: ${({ messageType: t }) => (t === 'sent' ? '#FEFEFF' : '#050505')};
  text-align: right;
`;
const TextMessage = styled.div`
  max-width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  align-self: ${({ messageType: t }) =>
    t === 'sent' ? 'flex-end' : 'flex-start'};
  text-align: ${({ messageType: t }) => (t === 'sent' ? 'right' : 'left')};
  img {
    /* width: 0px; */
    height: 40px;
    margin: 0 0.5rem;
    border-radius: 100%;
  }
`;

const Text = styled.h1`
  background-color: ${({ messageType: t }) =>
    t === 'sent' ? '#0084FF' : '#E4E7EA'};
  padding: 12px;
  border-radius: 18px;
  font-size: 1rem;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
`;

export default Message;
