export class CreateApplicantDTO {
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly middleName?: string;
    readonly cvUrl: string;
    readonly email: string;
    readonly phone: string;
}