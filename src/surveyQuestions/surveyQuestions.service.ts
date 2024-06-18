import { Get, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { SurveyQuestions } from "./surveyQuestions.model";

@Injectable()
export class SurveyQuestionService {
    constructor(private prisma: PrismaService) { }

    async getAllQuestions(): Promise<SurveyQuestions[]> {
        return this.prisma.survey_Questions.findMany()
    }

    async getQuestion(id: number): Promise<SurveyQuestions> {
        return this.prisma.survey_Questions.findUnique({
            where: { id: Number(id) }
        })
    }

    async createQuestion(data: SurveyQuestions): Promise<SurveyQuestions> {
        return this.prisma.survey_Questions.create({
            data
        })
    }

    async updateQuestion(id: number, data: SurveyQuestions): Promise<SurveyQuestions> {
        return this.prisma.survey_Questions.update({
            where: { id: Number(id) },
            data: { question: data.question }
        })
    }

    async deleteQuestion(id: number): Promise<SurveyQuestions> {
        return this.prisma.survey_Questions.delete({
            where: { id: Number(id) }
        })
    }
} 