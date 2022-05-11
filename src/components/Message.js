import React from 'react';
import styled from 'styled-components';

const Message = ({ messageType }) => {
  // console.log(type);
  return (
    <Container messageType={messageType}>
      <TextMessage messageType={messageType}>
        {'sample message here'}
      </TextMessage>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ messageType: t }) =>
    t === 'sent' ? 'flex-end' : 'flex-start'};
  justify-content: center;
  background-color: ${({ messageType: t }) =>
    t === 'sent' ? 'blue' : 'white'};
`;
const TextMessage = styled.div`
  position: absolute;

  left: ${({ messageType: t }) => (t === 'sent' ? '0' : 'auto')};
  right: ${({ messageType: t }) => (t === 'sent' ? '0' : 'auto')};
`;

export default Message;
