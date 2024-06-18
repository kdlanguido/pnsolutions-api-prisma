/*
  Warnings:

  - You are about to drop the `Applicant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Applicant";

-- CreateTable
CREATE TABLE "Applicants" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT,

    CONSTRAINT "Applicants_pkey" PRIMARY KEY ("id")
);
