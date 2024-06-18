import { Module } from "@nestjs/common";
import { ApplicantsController } from "./applicant.controller";
import { PrismaService } from "src/prisma.service";
import { ApplicantService } from "./applicant.service";

@Module({
    controllers: [ApplicantsController],
    providers: [PrismaService, ApplicantService]
})
export class ApplicantsModule { }