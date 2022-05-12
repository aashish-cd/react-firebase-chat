import React, { useRef, useContext, useState } from 'react';
import styled from 'styled-components';
import useWindowWidth from '../customHooks/useWindowWidth';
import Message from './Message';
import { IndexContext } from '../context/index.context';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const ChatBox = () => {
  const dummy = useRef();
  const width = useWindowWidth();
  const { firestore, auth, firebase } = useContext(IndexContext);

  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });

  const [newMessage, setNewMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messageRef.add({
      text: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setNewMessage('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Container width={width}>
        {messages &&
          messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              messageType={
                message.uid === auth.currentUser.uid ? 'sent' : 'received'
              }
              photoURL={message.photoURL}
            />
          ))}
        <span ref={dummy}></span>
      </Container>
      <InputContainer>
        <Input type={'text'} placeholder='Write message here...' />
        <Button onClick={sendMessage}>Send</Button>
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
