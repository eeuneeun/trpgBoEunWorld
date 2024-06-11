'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export default function Game() {
   const [isLike, setIsLike] = useState(false)
   return (<>
      <div className='game'>
         <h2>
            팥쥐콩쥐 이야기

            <button className='like-btn' onClick={()=>setIsLike(!isLike)}>
               {
                  isLike 
                  ? <StarIcon />
                  : <StarBorderIcon />
               }
            </button>
            
            <Link
               className='start-btn' 
               href="/game/gameBook"
            >
               이야기 시작하기
            </Link>
         </h2>
      </div>
   </>)
}




    
    
 