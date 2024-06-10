'use client';

import * as React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

export default function Postcode({...props}){
  const open = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");

  // # 주소 정보를 토대로 위도와 경도를 조회하는 함수
  async function getLatLong(fullAddress : string){
    // 1. url에 쓰기 적합한 querySting으로 return  
    const queryString = new URLSearchParams(fullAddress).toString();

    // 2. API 호출
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/geocode?address=${queryString}`,{
      method: 'GET',
      headers: {
        "content-type": "application/json",
      },
    })
    
    // 3. lat, long 값이 포함된 결과 
    const result = JSON.parse(res.statusText)
    return result; 
  }

  // # Daum 주소 찾기 API 호출 함수
  const handleComplete = async (data : any) => {
    // -기본 주소값
    let fullAddress = data.address;
    // - 추가 주소 정보
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    const latlong = await getLatLong(fullAddress);
    
    props.setValue('address', fullAddress);
    props.setValue('lat', latlong.lat);
    props.setValue('long', latlong.long);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button type='button' className='postcode-btn' onClick={handleClick}>
      주소 찾기
    </button>
  );
};