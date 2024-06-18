-- CreateTable
CREATE TABLE "Applicant" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);
