/*
  Warnings:

  - You are about to drop the column `customerId` on the `article_outgoings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "article_outgoings" DROP CONSTRAINT "article_outgoings_customerId_fkey";

-- AlterTable
ALTER TABLE "article_outgoings" DROP COLUMN "customerId";

-- AlterTable
ALTER TABLE "outgoings" ADD COLUMN     "customerId" INTEGER;

-- AddForeignKey
ALTER TABLE "outgoings" ADD CONSTRAINT "outgoings_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
