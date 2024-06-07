"use server";

import { IEstateAddFormProps } from "@/app/_components/atomic/templates/estateAddForm";
import prisma from "@/app/_lib/prisma";
import { ClosetBox } from "@prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request){
  const closetBox : ClosetBox[]= await prisma.closetBox.findMany({
    select: {
      title: true,
      address:true,
      lat:true,
      long:true
    },
  })
  return new Response(JSON.stringify(closetBox))
}


export async function POST( request: Request ) {
  
}