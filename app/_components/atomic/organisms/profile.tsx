import useSWR from 'swr'
import { getUserData } from '@/app/_service/userService'

export function Profile () {
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_URL}/api/user/23`, getUserData)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return <div>hello {data.name}!</div>
}


// ★ TO DO : swr 기본 사용법 문서 정독 & 해당 부분 처리하기
//  - 1. Fetcher 는 결국 Service layer 함수
//  - 2. swr key 를 이용하여 Store 기능까지 구현 해 볼 것
//  - 3. 채팅과 크롤링 파트는 어떻게 할지 생각 해볼것