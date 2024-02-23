/*
  Warnings:

  - You are about to drop the `_DetailToProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `Detail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_DetailToProduct" DROP CONSTRAINT "_DetailToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_DetailToProduct" DROP CONSTRAINT "_DetailToProduct_B_fkey";

-- AlterTable
ALTER TABLE "Detail" ADD COLUMN     "productId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_DetailToProduct";

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
