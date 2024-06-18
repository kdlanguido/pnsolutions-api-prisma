import { Prisma } from "@prisma/client";

export class Applicants implements Prisma.ApplicantsCreateInput {
    id: number;
    firstName: string;
    lastName: string;
    middleName?: string;
    cvUrl: string;
    email: string;
    phone: string;
}