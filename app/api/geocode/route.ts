"use server";

import { NextRequest, NextResponse } from "next/server";


// # GEO CODING
// - 주소값을 던지면, 위도와 경도 좌표를 반환
export async function GET( request: NextRequest ){
  try {
    const address  = request.nextUrl.searchParams.get("address")
    console.log(address)

    const res = await fetch(`https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${address}}`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "X-NCP-APIGW-API-KEY-ID" :`${process.env.NEXT_PUBLIC_MAP_ID}`,
        "X-NCP-APIGW-API-KEY" :`${process.env.NEXT_PUBLIC_MAP_KEY}`
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.addresses && data.addresses.length > 0) {
        const location = data.addresses[0];
        console.log(location)
        
        return {
          lat: location.y,
          long: location.x
        };
      } else {
        return 'no address in location ' + address
      }
    });

    console.log("######### res", res)
    return new Response(JSON.stringify(res), {
        headers: { "content-type": "application/json" },
        status: 201,
        statusText : JSON.stringify(res)
    });
  
  } catch (error) {
    console.error('Error fetching popular apps:', error);
    return NextResponse.json({error: 'Error fetching popular apps'});
  }
}