/*
  Warnings:

  - You are about to drop the column `signupType` on the `User` table. All the data in the column will be lost.
  - Added the required column `provider` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "signupType",
ADD COLUMN     "profilePhoto" TEXT,
ADD COLUMN     "provider" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
