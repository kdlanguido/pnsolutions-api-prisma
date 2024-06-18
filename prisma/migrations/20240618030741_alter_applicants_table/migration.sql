/*
  Warnings:

  - Added the required column `cvUrl` to the `Applicants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Applicants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Applicants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Applicants" ADD COLUMN     "cvUrl" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
