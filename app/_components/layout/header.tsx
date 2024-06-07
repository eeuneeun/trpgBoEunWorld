'use client'

import * as React from 'react';

import Link from 'next/link';
import { useSession } from 'next-auth/react'
import ClearAllIcon from '@mui/icons-material/ClearAll';
import UserInfoForHeader from '../atomic/organisms/userInfoForHeader';

export default function Header () {
  const {data : session} = useSession();
  const [isSnbOpen, setIsSnbOpen] = React.useState(false)
  return (
    <div className={`header ${isSnbOpen ? "open" : ""}`}>
        <h1 className='logo'>
            <Link href="/">
                <span className='summary-logo'>🫘</span>
                <span className='full-logo'>🫘Red&Black Beans</span>
            </Link>
        </h1>
        <div className='gnb'>
          <button className='snb-open-btn' onClick={()=>setIsSnbOpen(!isSnbOpen)}>
            <ClearAllIcon />
          </button>
         
          <UserInfoForHeader session={session} />
          
        </div>
    </div>
  );
}