'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

function SignBtnGroup() {
  const {data : session} = useSession();
  console.log("session", session)


  if(session && session.user){
    return(
      <div className='btn-group'>
        <button
        className='signout-btn'
        onClick={() => signOut()}
        >
          {session.user.name}님 Log Out
        </button>
      </div>
    )
  }else{
    return (
      <div className='btn-group'>
        <button
          className='signin-btn'
          onClick={() => signIn()}
        >
          LogIn
        </button>
      </div>
    )
  }
}

export default SignBtnGroup