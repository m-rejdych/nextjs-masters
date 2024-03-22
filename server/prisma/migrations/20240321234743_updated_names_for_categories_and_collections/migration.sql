/*
  Warnings:

  - The values [BASICS,HOODIES,SHIRTS,JACKETS] on the enum `CategoryName` will be removed. If these variants are still used in the database, this will fail.
  - The values [SPORT,BEAUTY,ACCESSORIES] on the enum `CollectionName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CategoryName_new" AS ENUM ('CLOTHING', 'ACCESSORIES', 'JEWELRY', 'COSMETICS');
ALTER TABLE "Category" ALTER COLUMN "name" TYPE "CategoryName_new" USING ("name"::text::"CategoryName_new");
ALTER TYPE "CategoryName" RENAME TO "CategoryName_old";
ALTER TYPE "CategoryName_new" RENAME TO "CategoryName";
DROP TYPE "CategoryName_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "CollectionName_new" AS ENUM ('SUMMER', 'WINTER', 'NEW_ARRIVALS', 'BEST_SELLERS');
ALTER TABLE "Collection" ALTER COLUMN "name" TYPE "CollectionName_new" USING ("name"::text::"CollectionName_new");
ALTER TYPE "CollectionName" RENAME TO "CollectionName_old";
ALTER TYPE "CollectionName_new" RENAME TO "CollectionName";
DROP TYPE "CollectionName_old";
COMMIT;
