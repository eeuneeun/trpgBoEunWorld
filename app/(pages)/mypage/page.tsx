
'use client'

import Modal from '@/app/_components/atomic/templates/modal';
import { MyEstate } from '@/app/_components/atomic/templates/myEstate';
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Mypage() {
  const {data : session} = useSession();

  return (
    <div className='mypage'>
      <h2>MYPAGE</h2>
      <div className='mypage-contents flex-center'>

        <div className='profile'>
          <div className='profile-photo'>
            <img src="/profile.png" alt="프로필 사진" />
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
        <MyEstate />
      </div>
    </div>
  );
}
