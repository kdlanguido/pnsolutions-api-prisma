-- CreateTable
CREATE TABLE "Applicant_Survey" (
    "id" SERIAL NOT NULL,
    "applicantId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Applicant_Survey_pkey" PRIMARY KEY ("id")
);
