/*
  Warnings:

  - The values [Basics,T_shirts,Hoodies,Shirts,Jeans,Trousers,Shorts,Jackets,Sweaters,Shoes,Sockets,Underwear] on the enum `CategoryName` will be removed. If these variants are still used in the database, this will fail.
  - The values [Man,Woman,Baby,New_arrivals,Sport,Beauty] on the enum `CollectionName` will be removed. If these variants are still used in the database, this will fail.
  - The values [Black,Gray] on the enum `ColorName` will be removed. If these variants are still used in the database, this will fail.
  - The values [Cancelled,Created,Fulfilled,Paid] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [XL] on the enum `SizeType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CategoryName_new" AS ENUM ('BASICS', 'T_SHIRTS', 'HOODIES', 'SHIRTS', 'JEANS', 'TROUSERS', 'SHORTS', 'JACKETS', 'SWEATERS', 'SHOES', 'SOCKETS', 'UNDERWEAR');
ALTER TABLE "Category" ALTER COLUMN "name" TYPE "CategoryName_new" USING ("name"::text::"CategoryName_new");
ALTER TYPE "CategoryName" RENAME TO "CategoryName_old";
ALTER TYPE "CategoryName_new" RENAME TO "CategoryName";
DROP TYPE "CategoryName_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "CollectionName_new" AS ENUM ('MAN', 'WOMAN', 'BABY', 'NEW_ARRIVALS', 'SPORT', 'BEAUTY');
ALTER TABLE "Collection" ALTER COLUMN "name" TYPE "CollectionName_new" USING ("name"::text::"CollectionName_new");
ALTER TYPE "CollectionName" RENAME TO "CollectionName_old";
ALTER TYPE "CollectionName_new" RENAME TO "CollectionName";
DROP TYPE "CollectionName_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ColorName_new" AS ENUM ('BLACK', 'GRAY');
ALTER TABLE "Color" ALTER COLUMN "name" TYPE "ColorName_new" USING ("name"::text::"ColorName_new");
ALTER TYPE "ColorName" RENAME TO "ColorName_old";
ALTER TYPE "ColorName_new" RENAME TO "ColorName";
DROP TYPE "ColorName_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('CANCELLED', 'CREATED', 'FULFILLED', 'PAID');
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "SizeType_new" AS ENUM ('S', 'M', 'L', 'Xl');
ALTER TABLE "Size" ALTER COLUMN "type" TYPE "SizeType_new" USING ("type"::text::"SizeType_new");
ALTER TYPE "SizeType" RENAME TO "SizeType_old";
ALTER TYPE "SizeType_new" RENAME TO "SizeType";
DROP TYPE "SizeType_old";
COMMIT;
