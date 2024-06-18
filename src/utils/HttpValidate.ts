import { HttpException, HttpStatus } from "@nestjs/common";

export const ValidationSequence = async (operation: () => Promise<any>) => {
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
