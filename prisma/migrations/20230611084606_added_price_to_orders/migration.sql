/*
  Warnings:

  - Added the required column `price` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" ADD COLUMN     "price" INTEGER NOT NULL;
