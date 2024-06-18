import { Prisma } from "@prisma/client";

export class SurveyQuestions implements Prisma.Survey_QuestionsCreateInput {
    id: number;
    question: string;
}