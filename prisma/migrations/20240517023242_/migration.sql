/*
  Warnings:

  - You are about to drop the column `desc` on the `Estate` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Estate` table. All the data in the column will be lost.
  - Added the required column `contents` to the `Estate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxPeople` to the `Estate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photos` to the `Estate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Estate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Estate" DROP COLUMN "desc",
DROP COLUMN "image",
ADD COLUMN     "contents" TEXT NOT NULL,
ADD COLUMN     "maxPeople" INTEGER NOT NULL,
ADD COLUMN     "photos" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
