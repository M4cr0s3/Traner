/*
  Warnings:

  - You are about to alter the column `title` on the `cities` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `title` on the `countries` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "cities" ALTER COLUMN "title" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "countries" ALTER COLUMN "title" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "about" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hobbies" JSONB,
ADD COLUMN     "isEmailVerified" BOOLEAN,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "cities_countryId_idx" ON "cities" USING HASH ("countryId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
