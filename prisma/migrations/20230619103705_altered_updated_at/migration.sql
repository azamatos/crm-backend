/*
  Warnings:

  - You are about to drop the column `updateAt` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `outgoings` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `outgoings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "articles" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "outgoings" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
