/*
  Warnings:

  - Added the required column `singupDate` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "signupType" TEXT,
ADD COLUMN     "singupDate" TIMESTAMP(3) NOT NULL;
