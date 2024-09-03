import { signIn, signOut, useSession } from "next-auth/react";
import useSWR from "swr";
import { commonFetcher } from "../_lib/commonFetcher";

type TCredentials = {
  email: string;
  password: string;
};

type TUserInfo = {
  id: number;
  name: string;
  email: string;
  password: string;
  profilePhoto: string;
  provider: string;
};

export async function signinCheck(credentials: TCredentials) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credentials?.email,
      password: credentials?.password,
    }),
  });
  return res;
}

export async function signUpFirst(userInfo: TUserInfo) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  return res;
}

export async function getUserData() {
  const { data: session } = useSession();

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/23`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Token": session?.user.accessToken
        ? session?.user.accessToken
        : "",
    },
  });
  return res.body;
}

function useUser(userInfo: TUserInfo) {
  //@ts-ignore
  const { userData, error, isLoading } = useSWR(
    `/api/user/${userInfo.id}`,
    commonFetcher
  );

  return {
    user: userData,
    isLoading,
    isError: error,
  };
}
