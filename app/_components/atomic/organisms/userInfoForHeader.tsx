'use client';

import * as React from 'react';

import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth';

import AddReactionSharpIcon from '@mui/icons-material/AddReactionSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';

export interface IuserInfoForHeaderProps {
    session : Session | null
}

export default function UserInfoForHeader (props: IuserInfoForHeaderProps) {
  return (
    <div className='user-info'>
    {
      props?.session && props?.session?.user
      ? (<ul className='auth-info flex-between'>
          <li className='flex-between user-profile-wrap'>
            <Link href='/mypage' className='user-profile'>
              <AddReactionSharpIcon />
            </Link>
            {props?.session?.user?.name}님
          </li>
          <li>
            <button
              className='signout-btn'
              onClick={() => signOut()}
            >
              <LogoutSharpIcon />
            </button>
          </li>
        </ul>
      ):(
        <button
          className='signin-btn'
          onClick={() => signIn()}
        >
          <LoginSharpIcon />
        </button>
      )
    }
  </div>
  );
}
