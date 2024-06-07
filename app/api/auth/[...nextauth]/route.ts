import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
      CredentialsProvider({
        
        // # 기본 제공되는 폼위에 표기될 제목
        name: 'Credentials',
        
        // # 로그인 페이지를 따로 만들지 않는다면 /signin 이라는 주로소 기본 제공을 해줌
        credentials: {
          email: { label: '이메일', type: 'text', placeholder: '이메일을 입력해주세요' },
          password: { label: '비밀번호', type: 'password' },
        },

        // # 인증 & 인가 처리 부분
        async authorize(credentials, req) {

          // # 비지니스 로직
          // - 입력된 유저 정보를 확인 
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          })

          const user = await res.json()
          console.log("user: " , user)

          if (user) {
            // # 유저 정보가 있다면, JWT 토큰이 발행되어 함께 리턴
            return user

          } else {
            // # 만약 유저 정보가 없다면, 추가적인 처리가 가능한 영역
            return null
  
            // 1. 에러와 함께 리턴 하는 것도 가능 & 에러 페이지로 리다이렉트 가능
            // 2. 쿼리 파라미터와 함께 에러 메시지 리턴도 가능함
          }
        },
      }),
      KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID!,
        clientSecret: process.env.KAKAO_CLIENT_SECRET!
      }),
      NaverProvider({
        clientId: process.env.NAVER_CLIENT_ID!,
        clientSecret: process.env.NAVER_CLIENT_SECRET!
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      })
    ],
    // - 로그인 시도시, jwt 함수와 session 함수를 리턴
    callbacks: {
      async jwt({ token, user }) {
        return { ...token, ...user };
      },
  
    async session({ session, token }) {
        session.user = token as any;
        return session;
      },
    },
    pages : {
      signIn : '/auth/signin',
      signOut : '/',
      error : '/'
    }
})

export { handler as GET, handler as POST }