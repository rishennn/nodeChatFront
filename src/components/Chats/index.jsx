import { useEffect, useState } from 'react';
import './index.sass';
import Chat from '../Chat'

function Chats() {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    //get chats 
    setChats([{
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjh' },
      ],
      roomId: 'dfgdfgdfg'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: '131245fedsfs534534534dfsdfgt5345tr'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: '1342342345245fsdfgt5345tr'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjh' },
      ],
      roomId: '131245fsddfgdfgfdgfgt5345tr'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: '131245fedsfsdfsdfg3423423434t5345tr'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: 'dfgdfgdfgd'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjh' },
      ],
      roomId: 'dfgdfgdfgfg'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: 'dfg'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: 'sdfsdfsdfS'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjhgdfgjh' },
      ],
      roomId: 'dfgsdfsdf'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: '131245fedsfsdfsdfdfgdfgdfggt5345tr'
    }, {
      name: 'node',
      online: 4,
      messages: [
        { author: 'Glak', time: '14:04', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:44', message: 'fsdfsdf' },
        { author: 'Hayk', time: '14:54', message: '234zsdf' },
        { author: 'Glak', time: '14:56', message: 'gdfgjh' },
      ],
      roomId: '1342342345dfgdfghdfg245fsdfgt5345tr'
    }])
  }, []);
  return (

    <div className="chats">
      {chats.length && chats.map(chat => {
        return <Chat name={chat.name} time={chat.time} messages={chat.messages} online={chat.online} key={chat.roomId} />
      })}
    </div>
  )
}

export default Chats