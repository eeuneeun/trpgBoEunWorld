import { PrismaClient } from "@prisma/client";

// Prisma Client를 꼭 한 개만 메모리에 불러오는 로직
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
export default prisma;