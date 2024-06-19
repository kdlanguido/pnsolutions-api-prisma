import { Module } from '@nestjs/common';
import { ApplicantsModule } from './applicants/applicant.module';
import { SurveyQuestionsModule } from './surveyQuestions/surveyQuestion.module';

@Module({
  imports: [ApplicantsModule, SurveyQuestionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
