import { Module } from '@nestjs/common';
import { ApplicantsModule } from './applicants/applicant.module';

@Module({
  imports: [ApplicantsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
