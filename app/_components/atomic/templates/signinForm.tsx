'use client';

import React, { useEffect, useRef } from 'react' 
import Link from 'next/link';
import { getProviders, signIn } from 'next-auth/react'

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GoogleIcon from '@mui/icons-material/Google';



export interface ISigninFormProps {
    email : string,
    password : string
}


export default function SigninForm (){
    
    const [providers, setProviders] = useState(null);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ISigninFormProps>()


    // # 이메일 로그인 Caller 함수
    async function callPOST(data :ISigninFormProps, type: string){
        await signIn(type, {
            email: data.email,
            password: data.password,
            redirect: true,
            callbackUrl: "/",
          });
    }

    // # 써드파티 로그인 Caller 함수
    async function callThirdPartPOST(type: string){
        const result = await signIn(type, {
            redirect: true,
            callbackUrl: "/",
            });
    }

    // # 이메일 로그인 React Hook Form 함수
    const onSubmit: SubmitHandler<ISigninFormProps> = (data) => {
        console.log("data", data)
        callPOST(data, "credentials")
        // console.log("result", result)
    } 
    
    useEffect(() => {
        (async () => {
          const res: any = await getProviders();
          console.log(res);
          setProviders(res);
        })();
    }, []);

    return (<>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">
                    이메일
                    <input type="email" id="email" {...register("email")}/>
                </label>
                <label htmlFor="password">
                    비밀번호
                    <input type="password" id="password" {...register("password")}/>
                </label>
                <button className='signin-btn' title='로그인'>로그인</button>
            </form>
            <ul className='signup-group'>
                <li>
                    <button className='naver' onClick={()=>callThirdPartPOST("naver")}>
                        N
                    </button>
                </li>
                <li>
                    <button className='kakao' onClick={()=>callThirdPartPOST("kakao")}>
                        k
                    </button>
                </li>
                <li>
                    <button className='google' onClick={()=>callThirdPartPOST("google")}>
                        <GoogleIcon />
                    </button>
                </li>
                <li>
                    <Link href="/auth/signup" className='email' onClick={()=>handleSubmit(onSubmit)}>
                        <AlternateEmailIcon />
                    </Link>
                </li>
            </ul>
    </>);
}
