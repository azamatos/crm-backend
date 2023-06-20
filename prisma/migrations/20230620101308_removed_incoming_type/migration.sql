/*
  Warnings:

  - You are about to drop the column `type` on the `incomings` table. All the data in the column will be lost.
  - You are about to drop the column `isSold` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `orders` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "OutgoingType" ADD VALUE 'ORDER';

-- AlterTable
ALTER TABLE "incomings" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "isSold",
DROP COLUMN "type",
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "IncomingType";
