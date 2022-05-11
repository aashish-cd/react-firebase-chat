import React from 'react';
import styled from 'styled-components';

const Message = ({ messageType }) => {
  // console.log(type);
  return (
    <Container messageType={messageType}>
      <TextMessage messageType={messageType}>
        <Text messageType={messageType}>
          sample messag lets test for llsarksas aerae here Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Provident modi nostrum sequi
          impedit! Accusantium, nisi dolorum officiis magni nam atque ullam
          repudiandae aut recusandae dignissimos dolorem hic nihil, vel commodi
          itaque alias dicta placeat, excepturi laborum. Ut odit culpa veritatis
          aspernatur beatae, quod dolorum nostrum ex error fugiat cupiditate
          fugit!
        </Text>
      </TextMessage>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  color: ${({ messageType: t }) => (t === 'sent' ? '#FEFEFF' : '#050505')};
  text-align: right;
`;
const TextMessage = styled.div`
  width: 100%;
  text-align: ${({ messageType: t }) => (t === 'sent' ? 'right' : 'left')};
`;

const Text = styled.h1`
  background-color: ${({ messageType: t }) =>
    t === 'sent' ? '#0084FF' : '#E4E7EA'};
  padding: 12px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
`;

export default Message;
