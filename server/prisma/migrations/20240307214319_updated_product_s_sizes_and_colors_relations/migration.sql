/*
  Warnings:

  - You are about to drop the column `inStock` on the `Color` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Color` table. All the data in the column will be lost.
  - You are about to drop the column `inStock` on the `Size` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Size` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Color` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[type]` on the table `Size` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Color" DROP CONSTRAINT "Color_productId_fkey";

-- DropForeignKey
ALTER TABLE "Size" DROP CONSTRAINT "Size_productId_fkey";

-- AlterTable
ALTER TABLE "Color" DROP COLUMN "inStock",
DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "inStock",
DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "ColorOnProduct" (
    "inStock" BOOLEAN NOT NULL,
    "productId" TEXT NOT NULL,
    "colorId" TEXT NOT NULL,

    CONSTRAINT "ColorOnProduct_pkey" PRIMARY KEY ("productId","colorId")
);

-- CreateTable
CREATE TABLE "SizeOnProduct" (
    "inStock" BOOLEAN NOT NULL,
    "productId" TEXT NOT NULL,
    "sizeId" TEXT NOT NULL,

    CONSTRAINT "SizeOnProduct_pkey" PRIMARY KEY ("productId","sizeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Color_name_key" ON "Color"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Size_type_key" ON "Size"("type");

-- AddForeignKey
ALTER TABLE "ColorOnProduct" ADD CONSTRAINT "ColorOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColorOnProduct" ADD CONSTRAINT "ColorOnProduct_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SizeOnProduct" ADD CONSTRAINT "SizeOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SizeOnProduct" ADD CONSTRAINT "SizeOnProduct_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE CASCADE ON UPDATE CASCADE;
