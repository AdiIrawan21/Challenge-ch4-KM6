/*
  Warnings:

  - Made the column `users_id` on table `accounts` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_users_id_fkey";

-- DropIndex
DROP INDEX "accounts_users_id_key";

-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "users_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
