/*
  Warnings:

  - The values [Xl] on the enum `SizeType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `slug` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SizeType_new" AS ENUM ('S', 'M', 'L', 'XL');
ALTER TABLE "Size" ALTER COLUMN "type" TYPE "SizeType_new" USING ("type"::text::"SizeType_new");
ALTER TYPE "SizeType" RENAME TO "SizeType_old";
ALTER TYPE "SizeType_new" RENAME TO "SizeType";
DROP TYPE "SizeType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "slug" TEXT NOT NULL;
