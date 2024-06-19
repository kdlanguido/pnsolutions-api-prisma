import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { SurveyQuestionService } from "./surveyQuestions.service";
import { SurveyQuestions } from "./surveyQuestions.model";
import { ValidationSequence } from "src/utils/HttpValidate";
import { surveyQuestionSchema } from "./surveyQuestion.schema";


@Controller('api/v1/survey-questions')
export class SurveyQuestionsController {
    constructor(private readonly surveyQuestionService: SurveyQuestionService) { }

    @Get()
    async getAllQuestions(): Promise<SurveyQuestions[]> {
        return this.surveyQuestionService.getAllQuestions()
    }

    @Get(':id')
    async getQuestion(@Param('id') id: number): Promise<SurveyQuestions> {
        return this.surveyQuestionService.getQuestion(id)
    }

    @Post()
    async createQuestion(@Body() postData: SurveyQuestions) {
        return ValidationSequence(async () => {
            const validatedData = await surveyQuestionSchema.validateAsync(postData)
            await this.surveyQuestionService.createQuestion(validatedData)
            return {
                statusCode: HttpStatus.CREATED,
                message: 'Question created successfully',
            };
        })
    }


}