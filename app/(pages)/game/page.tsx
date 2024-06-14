'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { LikeBtn } from '@/app/_components/atomic/atoms/button';

export default function Game() {
   
   return (<>
      <div className='game'>
         <h2>
            팥쥐콩쥐 이야기

            <LikeBtn />
            
            <Link
               className='start-btn btn' 
               href="/game/gameBook"
            >
               이야기 시작하기
            </Link>
         </h2>
      </div>
   </>)
}




    
    
 