
'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Profile } from '@/app/_components/atomic/organisms/profile';
export default function Mypage() {
  const {data : session} = useSession();

  return (
    <div className='mypage'>
      <h2>MYPAGE</h2>
      <div className='mypage-contents flex-center'>

        <div className='profile'>
          <div className='profile-photo'>
            <img src={session?.user.picture} alt="프로필 사진" />
          </div>

          <ul className='user-info'>
            <li>
              <span>이름</span>          
              {session?.user.name}
            </li>
            <li>
              <span>아이디</span>
              {session?.user.email}
            </li>
          </ul>
        
        </div>
        <Profile />
      </div>
    </div>
  );
}
