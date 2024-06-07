'use client';

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface ISignupFormProps {
    name : string,
    email : string,
    password : string,
}

export function SignupForm (){
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ISignupFormProps>()


    async function signUpPost(data : ISignupFormProps){
        const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name : data.name,
                email: data.email,
                password: data.password,
            }),
        })
        
        if(result.status == 500){
            alert("사용중인 이메일입니다!")
        }else if(result.status == 200){
            alert("가입되었습니다.")
            router.push("/")

        }
    }   


    const onSubmit: SubmitHandler<ISignupFormProps> = (data) => {
        signUpPost(data)
    } 
    
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
                이름
                <input type="text" id="name" {...register("name")} />
            </label>
            <label htmlFor="email">
                이메일
                <input type="email" id="email" {...register("email")}/>
            </label>
            <label htmlFor="password">
                비밀번호
                <input type="password" id="password" {...register("password")}/>
            </label>
            <button className='signup-btn' title='가입하기'>가입하기</button>
        </form>

    </>);
}
