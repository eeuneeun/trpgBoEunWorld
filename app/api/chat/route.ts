import { NextApiRequest } from "next";
import { io, Socket } from "socket.io-client";

import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "@/app/_types/socket";

function chatHandler(req: NextApiRequest, res: any) {
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
  console.log(req);
  if (req.method === "POST") {
    // 메시지 얻기
    const msg = req.body;
    // on('message')가 메시지를 받음
    socket.emit("hello");
    res.status(201).json(msg);
  }
}

export { chatHandler as GET, chatHandler as POST };
