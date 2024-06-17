import next from "next";

import { createServer } from "node:http";
import { Server } from "socket.io";




const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3030;

// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();



app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
     
    socket.broadcast.emit("msg", "world");
    socket.on("msg", (value) => {
      console.log(value)
      io.emit("msg", value)
      
    });
    socket.on("hello", (value) => {
      console.log(value)
    });

  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});