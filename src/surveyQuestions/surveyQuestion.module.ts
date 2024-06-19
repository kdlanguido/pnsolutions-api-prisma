import { Module } from "@nestjs/common";
import { SurveyQuestionsController } from "./surveyQuestions.controller";
import { PrismaService } from "src/prisma.service";
import { SurveyQuestionService } from "./surveyQuestions.service";

@Module({
    controllers: [SurveyQuestionsController],
    providers: [PrismaService, SurveyQuestionService]
})
export class SurveyQuestionsModule { }