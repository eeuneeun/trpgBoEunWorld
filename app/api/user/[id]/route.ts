import { verifyJwt } from '@/app/_lib/jwt' 
import prisma from '@/app/_lib/prisma' 

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  // 토큰 인증 & 인가
  const accessToken = request.headers.get('authorization')
  console.log("accessToken",accessToken)

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: 'No Authorization' }), {
      status: 401,
    })
  }

  const findId = Number(params.id)

  const userInfo = await prisma.user.findUnique({
    where: {
      id: findId,
    }
  })
  return new Response(JSON.stringify(userInfo))
}