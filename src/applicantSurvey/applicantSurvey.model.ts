import { Prisma } from "@prisma/client";

export class ApplicantSurvey implements Prisma.Applicant_SurveyCreateInput {
    id: number;
    applicantId: number;
    questionId: number;
    answer: string;
}