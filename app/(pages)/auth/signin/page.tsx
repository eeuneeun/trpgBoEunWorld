import SigninForm from '@/app/_components/atomic/templates/signinForm';
import * as React from 'react';

export interface ISigninProps {
}

export default function Signin (props: ISigninProps) {
  return (
    <div className='signup signin'>
       <div className='form-wrap'>
        <h2>로그인</h2>
        <SigninForm />
       </div>
    </div>
  );
}
