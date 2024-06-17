import { NextApiRequest } from "next";


export default function ChatAPI(req: NextApiRequest, res: any){
  console.log(req)
  if (req.method === 'POST') {
    // 메시지 얻기
    const msg = req.body;
    // on('message')가 메시지를 받음
    res?.socket?.server?.io?.emit('message', message);

    res.status(201).json(message);
  }
};