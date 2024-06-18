/*
  Warnings:

  - You are about to drop the column `question` on the `Applicant_Survey` table. All the data in the column will be lost.
  - Added the required column `questionId` to the `Applicant_Survey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Applicant_Survey" DROP COLUMN "question",
ADD COLUMN     "questionId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Survey_Questions" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "Survey_Questions_pkey" PRIMARY KEY ("id")
);
