"use server";

import { IEstateAddFormProps } from "@/app/_components/atomic/templates/estateAddForm";
import prisma from "@/app/_lib/prisma";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

// # 나의 매물 정보 불러오기
// - User ID 로 조회하여 리턴
export async function GET( request: NextRequest ){
  const estate = await prisma.estate.findMany()
  return new Response(JSON.stringify(estate))
}






// # 나의 매물 등록 기능
export async function POST( request: Request ) {
  const body: IEstateAddFormProps = await request.json()

  const estate = await prisma.estate.create({
    data: {
      title : body.title,
      address : body.address,
      lat: Number(body.lat),
      long: Number(body.long),
      photos : JSON.stringify(body.photos),
      contents : body.contents,
      type : body.type,
      maxPeople : Number(body.maxPeople),
      price : Number(body.price),
      published : JSON.parse(body.published),
      authorId : 1,
    },
  })

  if(estate != null || estate != undefined ){
    const { ...res } = estate;
    const result = {
      title : res.title
    };
    
    return new Response(JSON.stringify(result))
  }else{
    return new Response(JSON.stringify(null));
  }
}

