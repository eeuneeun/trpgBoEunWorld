"use client";
import React, { useState, useEffect } from 'react';

import {socket} from '../../socket';

import { Box, Button, HStack, Input, Text } from '@chakra-ui/react';
import { Me, Other } from '@/app/_components/atomic/organisms/chatMsgBox';

export interface IMsg {
  user: string;
  msg: string;
}

// 랜덤 유저
const user = 'User_' + String(new Date().getTime()).substr(-3);


export default function Chat() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  // 채팅 메시지 용도
  const [chat, setChat] = useState<IMsg[]>([]);
  const [msg, setMsg] = useState<string>('');




  useEffect(() => {
    
    if (socket.connected) {
      // 소켓 연결
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);



  async function sendMessage(){
    setMsg('')
    if (msg) {
      const message: IMsg = {
        user,
        msg,
      };

      // // send Message to Other user
      // const res = await ChatAPI(message);

      // // reset field if OK
      // if (res.status === 201) {
      //   setMsg('');
      // }
      socket.emit("msg",message)

      socket.on("msg",(value : IMsg)=>{
        let tmp = [...chat];
        setChat([...tmp, value])
        tmp = []
      })


    }
  };

  return (
    <div className='chat'>
      <Box>
        <p>Status: { isConnected ? "connected" : "disconnected" }</p>
        <p>Transport: { transport }</p>
        <Box
          borderRadius={4}
          w="100%"
          h="500px"
          m="0 auto"
          mt="32px"
          bgColor="gray.200"
          overflowY="scroll"
        >
          {chat.map((chat, i) => (
            <Box key={i}>
              {chat.user === user ? (
                <Me message={chat.msg}/>
              ) : (
                <Other user={chat.user} message={chat.msg} />
              )}
            </Box>
          ))}
        </Box>
        <HStack w="100%" h="55px" m="0 auto" mt="12px">
          <Input
            type="text"
            w="90%"
            h="100%"
            value={msg}
              placeholder={isConnected ? '메시지를 입력하세요' : '연결중입니다...'}
              isDisabled={!isConnected}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              }}
          />
          <Button w="10%" h="100%" 
            onClick={sendMessage} 
            isLoading={!isConnected}
          >
            보내기
          </Button>
        </HStack>
      </Box>
    </div>
  );
}
