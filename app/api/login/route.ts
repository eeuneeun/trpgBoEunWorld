import { signJwtAccessToken } from '@/app/_lib/jwt';
import prisma from '@/app/_lib/prisma';
import * as bcrypt from 'bcrypt'

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  })

  console.log("####로그인 user", body)

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    
    // 헬퍼 함수를 이용하여 전달받은 token 에 secret key 추가
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };

    console.log("####로그인", result)

    return new Response(JSON.stringify(result))
  } else return new Response(JSON.stringify(null))
}