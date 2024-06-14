"use client";
import React from 'react';
import ChatAPI from '@/app/api/chat/route'; 
import { Box, Button, HStack, Input, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {socket} from '../../socket';

export interface IMsg {
  user: string;
  msg: string;
}

// 랜덤 유저
const user = 'User_' + String(new Date().getTime()).substr(-3);

// 내 메시지
const Me = ({ message }: { message: string }) => {
  return (
    <Box p="6px 10px">
      <Text as="p">Me</Text>
      <Box
        bgColor="blue.400"
        color="white"
        maxW="320px"
        borderRadius={8}
        p="6px 8px"
        display="inline-block"
      >
        <Text>{message}</Text>
      </Box>
    </Box>
  );
};

// 상대 메시지
const Other = ({ user, message }: { user: string; message: string }) => {
  return (
    <Box p="6px 10px" textAlign="right">
      <Text as="p" textAlign="right">
        {user}
      </Text>
      <Box
        bgColor="green.400"
        color="white"
        maxW="320px"
        borderRadius={8}
        p="6px 8px"
        display="inline-block"
      >
        <Text>{message}</Text>
      </Box>
    </Box>
  );
};


export default function Chat() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    if (socket.connected) {
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

  // const sendMessage = async () => {
  //   if (msg) {
  //     const message: IMsg = {
  //       user,
  //       msg,
  //     };

  //     // send Message to Other user
  //     const res = await ChatAPI(message);

  //     // reset field if OK
  //     if (res.status === 201) {
  //       setMsg('');
  //     }
  //   }
  // };
  return (
    <div>
      <p>Status: { isConnected ? "connected" : "disconnected" }</p>
      <p>Transport: { transport }</p>
    </div>
  );
}
