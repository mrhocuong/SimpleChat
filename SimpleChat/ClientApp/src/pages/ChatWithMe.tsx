import { FC, useEffect, useState } from 'react';
import Style from '../styles/pages/ChatWithMe.module.scss';
import avatar from '../assets/avatar.jpg';
import devAvatar from '../assets/dev-avarta.jpeg';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
} from '@microsoft/signalr';
import { v4 as uuidv4 } from 'uuid';

interface IMessageModel {
  id: string;
  senderId: number;
  senderName: string;
  message: string;
}
const ChatWithMe: FC = () => {
  const navigate = useNavigate();
  const [connection, setConnection] = useState<HubConnection | null>(null);

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl('/hub/chatWithMe', {
        accessTokenFactory: async () => {
          return uuidv4();
        },
        withCredentials: false,
      })
      .build();
    setConnection(connection);
  }, []);

  useEffect(() => {
    
    if (connection && connection.state !== HubConnectionState.Connected) {
      connection.on('receiveMessage', (message: string) => {
        console.log(message);
      });
      connection.start().catch((err) => {
        console.log('aa???', err);
      });
    }
  }, [connection]);
  
  const userId = 1;
  const chatConst: IMessageModel[] = [
    {
      id: '1',
      senderId: userId,
      senderName: 'Cuong Ho',
      message: 'hello',
    },
    {
      id: '2',
      senderId: userId + 1,
      senderName: 'Guest  12',
      message: 'hello back',
    },
    {
      id: '3',
      senderId: userId,
      senderName: 'Cuong Ho',
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      id: '4',
      senderId: userId + 1,
      senderName: 'Guest',
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum back`,
    },
  ];
  const renderMessage = (message: IMessageModel) => {
    return (
      <div className={Style.chatMessage} key={message.id}>
        <div className={Style.avatar}>
          {message.senderId === userId ? (
            <img src={avatar} alt={avatar} />
          ) : (
            <img src={devAvatar} alt={devAvatar} />
          )}
        </div>
        <div className={Style.content}>
          <div className={Style.sender}>{message.senderName}</div>
          <div className={Style.message}> {message.message}</div>
        </div>
      </div>
    );
  };
  return (
    <div className={Style.chatWithMe}>
      <div className={Style.chatHeader}>
        <span
          onClick={() => {
            navigate('/');
          }}
        >
          <FontAwesomeIcon icon={faHome} />
        </span>
        <p>Chat With Me</p>
      </div>
      <div className={Style.chatSection}>
        {chatConst.map((message) => renderMessage(message))}
      </div>
      <div className={Style.chatInput}>
        <input type='text' placeholder='Type your message here' />
      </div>
    </div>
  );
};
export default ChatWithMe;
