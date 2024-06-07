/*
  Warnings:

  - The primary key for the `ClosetBox` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ClosetBox` table. All the data in the column will be lost.
  - Added the required column `lat` to the `Estate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `long` to the `Estate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClosetBox" DROP CONSTRAINT "ClosetBox_pkey",
DROP COLUMN "id",
ALTER COLUMN "lat" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "long" SET DATA TYPE DOUBLE PRECISION,
ADD CONSTRAINT "ClosetBox_pkey" PRIMARY KEY ("title");

-- AlterTable
ALTER TABLE "Estate" ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "long" DOUBLE PRECISION NOT NULL;
