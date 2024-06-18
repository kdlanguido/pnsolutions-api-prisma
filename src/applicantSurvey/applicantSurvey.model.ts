import { Prisma } from "@prisma/client";

export class ApplicantSurvey implements Prisma.Applicant_SurveyCreateInput{
    id:number;
    applicantId: number;
    question: string;
    answer: string;
}