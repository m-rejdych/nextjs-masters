/*
  Warnings:

  - The values [T_SHIRTS,JEANS,TROUSERS,SHORTS,SWEATERS,SHOES,SOCKETS,UNDERWEAR] on the enum `CategoryName` will be removed. If these variants are still used in the database, this will fail.
  - The values [MAN,WOMAN,BABY] on the enum `CollectionName` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CategoryName_new" AS ENUM ('BASICS', 'HOODIES', 'SHIRTS', 'JACKETS');
ALTER TABLE "Category" ALTER COLUMN "name" TYPE "CategoryName_new" USING ("name"::text::"CategoryName_new");
ALTER TYPE "CategoryName" RENAME TO "CategoryName_old";
ALTER TYPE "CategoryName_new" RENAME TO "CategoryName";
DROP TYPE "CategoryName_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "CollectionName_new" AS ENUM ('NEW_ARRIVALS', 'SPORT', 'BEAUTY', 'ACCESSORIES');
ALTER TABLE "Collection" ALTER COLUMN "name" TYPE "CollectionName_new" USING ("name"::text::"CollectionName_new");
ALTER TYPE "CollectionName" RENAME TO "CollectionName_old";
ALTER TYPE "CollectionName_new" RENAME TO "CollectionName";
DROP TYPE "CollectionName_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productId_fkey";

-- DropTable
DROP TABLE "Image";

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "CategoryImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectionImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "CollectionImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoryImage_categoryId_key" ON "CategoryImage"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "CollectionImage_categoryId_key" ON "CollectionImage"("categoryId");

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryImage" ADD CONSTRAINT "CategoryImage_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionImage" ADD CONSTRAINT "CollectionImage_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
