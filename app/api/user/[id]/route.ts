import { verifyJwt } from '@/app/_lib/jwt' 
import prisma from '@/app/_lib/prisma' 

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  // 토큰 인증 & 인가
  const accessToken = request.headers.get('authorization')
  console.log(accessToken)

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: 'No Authorization' }), {
      status: 401,
    })
  }

  console.log(params)

  const id = Number(params.id)

  const userPosts = await prisma.post.findMany({
    where: {
      authorId: id,
    },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  })
  return new Response(JSON.stringify(userPosts))
}