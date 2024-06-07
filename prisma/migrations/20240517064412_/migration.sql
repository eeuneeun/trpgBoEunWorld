-- CreateTable
CREATE TABLE "ClosetBox" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "lat" INTEGER NOT NULL,
    "long" INTEGER NOT NULL,

    CONSTRAINT "ClosetBox_pkey" PRIMARY KEY ("id")
);
