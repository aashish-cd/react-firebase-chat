import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useWindowWidth from '../customHooks/useWindowWidth';
import Message from './Message';
import { useFirebase } from '../context/index.context';
import { firestore } from '../firebase';
import {
  collection,
  query,
  serverTimestamp,
  orderBy,
  limit,
  doc,
  onSnapshot,
  addDoc,
} from 'firebase/firestore';

const ChatBox = () => {
  const dummy = useRef();
  const width = useWindowWidth();
  const { auth } = useFirebase();
  const [newMessage, setNewMessage] = useState('');

  const messageRef = collection(firestore, 'messages');
  const queryData = query(messageRef, orderBy('createdAt'), limit(25));
  const [messages, setMessages] = useState([]);
  const fetchMessages = async () => {
    onSnapshot(queryData, (ss) => {
      const allMessages = [];
      ss.forEach((each) => {
        allMessages.push(each.data());
      });
      setMessages(
        allMessages.map((message) => ({
          uid: message.uid,
          photoURL: message.photoURL,
          text: message.text,
          id: doc.id,
        }))
      );
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    try {
      await addDoc(messageRef, {
        text: newMessage,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      });
    } catch (error) {
      console.log(error);
    }

    setNewMessage('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    fetchMessages();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container width={width}>
        {messages &&
          messages.map((message) => (
            <Message
              key={message.id}
              message={message.text}
              messageType={
                message.uid === auth.currentUser.uid
                  ? 'sent'
                  : 'received' || 'sent'
              }
              photoURL={
                message.photoURL ||
                'https://avatars.githubusercontent.com/u/86340075?s=40&v=4'
              }
            />
          ))}
        <span ref={dummy} style={{ height: '50px' }}></span>
      </Container>
      <InputContainer>
        <form
          onSubmit={sendMessage}
          style={{
            display: 'flex',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Input
            type={'text'}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder='Write message here...'
          />
          <Button type='submit'>Send</Button>
        </form>
      </InputContainer>
    </>
  );
};

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
  background-color: white;
  align-items: center;
  position: fixed;
  bottom: 0;
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
