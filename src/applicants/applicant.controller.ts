import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApplicantService } from "./applicant.service";
import { Applicants } from "./applicants.model";
import { applicantSchema } from "./applicant.schema";
import { ValidationSequence } from "src/utils/HttpValidate";

@Controller('api/v1/applicants')
export class ApplicantsController {
    constructor(private readonly applicantService: ApplicantService) { }

    @Get()
    async getAllApplicants(): Promise<Applicants[]> {
        return this.applicantService.getAllApplicants();
    }

    @Get(':id')
    async getApplicant(@Param('id') id: number): Promise<Applicants | null> {
        return this.applicantService.getApplicant(id);
    }

    @Delete(':id')
    async deleteApplicant(@Param('id') id: number) {
        await this.applicantService.deleteApplicant(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Applicant deleted successfully',
        };
    }

    @Post()
    async postApplicant(@Body() postData: Applicants) {
        return ValidationSequence(async () => {
            const validatedData = await applicantSchema.validateAsync(postData);
            await this.applicantService.createApplicant(validatedData);
            return {
                statusCode: HttpStatus.CREATED,
                message: 'Applicant created successfully',
            };
        });
    }

    @Put(':id')
    async updateApplicant(@Param('id') id: number, @Body() postData: Applicants) {
        return ValidationSequence(async () => {
            const validatedData = await applicantSchema.validateAsync(postData);
            await this.applicantService.updateApplicant(id, validatedData);
            return {
                statusCode: HttpStatus.OK,
                message: 'Applicant updated successfully',
            };
        });
    }
}
