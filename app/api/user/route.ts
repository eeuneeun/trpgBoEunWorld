import prisma from "@/app/_lib/prisma";
import * as bcrypt from 'bcrypt';

interface RequestBody {
  name: string;
  email: string;
  password: string;
  provider: string;
  profilePhoto: string;
}

export async function POST(request: Request){
  const body: RequestBody = await request.json()

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
      provider : body.provider,
      profilePhoto : body?.profilePhoto, 
      singupDate : new Date()
    },
  })

  const { password, ...result } = user
  return new Response(JSON.stringify(result))
}