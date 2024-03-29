/*
  Warnings:

  - You are about to drop the column `identityNumber` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `identityType` on the `profiles` table. All the data in the column will be lost.
  - Added the required column `identity_number` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identity_type` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "identityNumber",
DROP COLUMN "identityType",
ADD COLUMN     "identity_number" TEXT NOT NULL,
ADD COLUMN     "identity_type" TEXT NOT NULL;
