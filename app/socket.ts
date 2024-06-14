import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "./_types/socket";

const isBrowser = typeof window !== "undefined";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = isBrowser ? io() : {};



