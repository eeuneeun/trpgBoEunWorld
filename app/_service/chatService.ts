

type TCredentials = {
 email : string;
 password : string 
}

type TUserInfo = {
    name : string;
    email : string;
    password : string;
    profilePhoto : string;
    provider : string;
}

export async function signinCheck(credentials : TCredentials){
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials?.email,
          password: credentials?.password,
        }),
      })
    return res;
}


export async function signUpFirst(userInfo : TUserInfo){
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        })
    return res;
}