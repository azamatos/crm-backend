/*
  Warnings:

  - You are about to drop the column `customerId` on the `incomings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "incomings" DROP CONSTRAINT "incomings_customerId_fkey";

-- AlterTable
ALTER TABLE "incomings" DROP COLUMN "customerId";

-- AlterTable
ALTER TABLE "outgoings" ADD COLUMN     "orderId" INTEGER;

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "type" "IncomingType" NOT NULL DEFAULT 'INCOME',
    "isSold" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_orders" (
    "sellPrice" INTEGER NOT NULL,
    "primePrice" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "articleId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "article_orders_articleId_orderId_key" ON "article_orders"("articleId", "orderId");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_orders" ADD CONSTRAINT "article_orders_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_orders" ADD CONSTRAINT "article_orders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "outgoings" ADD CONSTRAINT "outgoings_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
