/*
  Warnings:

  - You are about to drop the column `total` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "total";

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "quantity" SET DEFAULT 1;
