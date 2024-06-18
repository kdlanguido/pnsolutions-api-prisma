import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApplicantService } from "./applicant.service";
import { Applicants } from "./applicants.model";
import { applicantSchema } from "./applicant.schema";

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
            statusCode: HttpStatus.NO_CONTENT,
            message: 'Applicant deleted successfully',
        };
    }

    @Post()
    async postApplicant(@Body() postData: Applicants) {
        return this.handleService(async () => {
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
        return this.handleService(async () => {
            const validatedData = await applicantSchema.validateAsync(postData);
            await this.applicantService.updateApplicant(id, validatedData);
            return {
                statusCode: HttpStatus.OK,
                message: 'Applicant updated successfully',
            };
        });
    }

    private async handleService(operation: () => Promise<any>) {
        try {
            return await operation();
        } catch (error) {
            throw new HttpException(
                {
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Validation failed',
                    error: error.details ? error.details[0].message : error.message,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }
}
