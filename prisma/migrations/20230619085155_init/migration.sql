-- CreateEnum
CREATE TYPE "OutgoingType" AS ENUM ('INCOME', 'DELIVERY', 'OTHER');

-- CreateEnum
CREATE TYPE "IncomingType" AS ENUM ('INCOME', 'ORDER');

-- CreateTable
CREATE TABLE "articles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "price" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incomings" (
    "id" SERIAL NOT NULL,
    "type" "IncomingType" NOT NULL DEFAULT 'INCOME',
    "isSold" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "customerId" INTEGER,

    CONSTRAINT "incomings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_incomes" (
    "sellPrice" INTEGER NOT NULL,
    "primePrice" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "articleId" INTEGER NOT NULL,
    "incomingId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "outgoings" (
    "id" SERIAL NOT NULL,
    "type" "OutgoingType" NOT NULL DEFAULT 'INCOME',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "incomingId" INTEGER,

    CONSTRAINT "outgoings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_outgoings" (
    "sum" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "articleId" INTEGER NOT NULL,
    "outgoingId" INTEGER NOT NULL,
    "customerId" INTEGER
);

-- CreateTable
CREATE TABLE "other_outgoings" (
    "sum" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "outgoingId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "delivery_outgoings" (
    "sum" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "outgoingId" INTEGER NOT NULL,
    "deliverymanId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "desciption" TEXT,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deliverymen" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "desciption" TEXT,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "deliverymen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "articles_name_key" ON "articles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "article_incomes_articleId_incomingId_key" ON "article_incomes"("articleId", "incomingId");

-- CreateIndex
CREATE UNIQUE INDEX "article_outgoings_articleId_outgoingId_key" ON "article_outgoings"("articleId", "outgoingId");

-- CreateIndex
CREATE UNIQUE INDEX "other_outgoings_outgoingId_key" ON "other_outgoings"("outgoingId");

-- CreateIndex
CREATE UNIQUE INDEX "delivery_outgoings_outgoingId_deliverymanId_key" ON "delivery_outgoings"("outgoingId", "deliverymanId");

-- AddForeignKey
ALTER TABLE "incomings" ADD CONSTRAINT "incomings_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_incomes" ADD CONSTRAINT "article_incomes_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_incomes" ADD CONSTRAINT "article_incomes_incomingId_fkey" FOREIGN KEY ("incomingId") REFERENCES "incomings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "outgoings" ADD CONSTRAINT "outgoings_incomingId_fkey" FOREIGN KEY ("incomingId") REFERENCES "incomings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_outgoings" ADD CONSTRAINT "article_outgoings_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_outgoings" ADD CONSTRAINT "article_outgoings_outgoingId_fkey" FOREIGN KEY ("outgoingId") REFERENCES "outgoings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_outgoings" ADD CONSTRAINT "article_outgoings_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "other_outgoings" ADD CONSTRAINT "other_outgoings_outgoingId_fkey" FOREIGN KEY ("outgoingId") REFERENCES "outgoings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_outgoings" ADD CONSTRAINT "delivery_outgoings_outgoingId_fkey" FOREIGN KEY ("outgoingId") REFERENCES "outgoings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_outgoings" ADD CONSTRAINT "delivery_outgoings_deliverymanId_fkey" FOREIGN KEY ("deliverymanId") REFERENCES "deliverymen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliverymen" ADD CONSTRAINT "deliverymen_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
