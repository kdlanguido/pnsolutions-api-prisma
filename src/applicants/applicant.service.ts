import { CreateApplicantDTO } from "./createApplicant.dto";
import { PrismaService } from "src/prisma.service";
import { Applicants } from "./applicants.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApplicantService {
    constructor(private prisma: PrismaService) { }

    async getAllApplicants(): Promise<Applicants[]> {
        return this.prisma.applicants.findMany()
    }

    async getApplicant(id: number): Promise<Applicants | null> {
        return this.prisma.applicants.findUnique({
            where: { id: Number(id) }
        })
    }

    async createApplicant(data: CreateApplicantDTO): Promise<Applicants> {
        return this.prisma.applicants.create({
            data
        })
    }

    async updateApplicant(id: number, data: Applicants): Promise<Applicants> {
        return this.prisma.applicants.update({
            where: { id: Number(id) },
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                middleName: data.middleName,
                email: data.email,
                cvUrl: data.cvUrl,
                phone: data.phone
            }
        })
    }

    async deleteApplicant(id: number): Promise<Applicants> {
        return this.prisma.applicants.delete({
            where: { id: Number(id) }
        })
    }
}