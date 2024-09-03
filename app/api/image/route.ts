"use server";

import prisma from "@/app/_lib/prisma";
import { readFile } from "fs/promises";
import fs from "fs";

// // # 이미지 가져오기
// export async function GET(imageId:number, outputPath:string) {
//   try {
//     // 이미지 데이터를 불러옴
//     const image = await prisma.image.findUnique({
//       where: { id: imageId },
//     });

//     if (image) {
//       // 불러온 이미지를 파일로 저장
//       fs.writeFileSync(`${outputPath}${image.name}`, image.data);
//       console.log('Image downloaded successfully!');
//     } else {
//       console.log('Image not found!');
//     }
//   } catch (err) {
//     console.error('Error downloading image:', err);
//   } finally {
//     // Prisma 클라이언트 연결 종료
//     await prisma.$disconnect();
//   }
// }

// 이미지 다운로드 함수 호출
//downloadImage(1, 'path/to/save/');
// # 이미지 업로드
// export async function POST( request: Request ) {
//   console.log(request)

// //   try {

// //     // 이미지 파일을 읽어 바이트 배열로 변환
// //     const imageData = readFile(imagePath);

// //     // 이미지를 데이터베이스에 저장
// //     const image = await prisma.image.create({
// //       data: {
// //         name: imageName,
// //         data: imageData,
// //       },
// //     });

// //     console.log('Image uploaded successfully:', image);
// //   } catch (err) {
// //     console.error('Error uploading image:', err);
// //   } finally {
// //     // Prisma 클라이언트 연결 종료
// //     await prisma.$disconnect();
// //   }

// // // 이미지 업로드 함수 호출
// // uploadImage('path/to/your/image.jpg', 'image_name');
// }
