import * as Joi from '@hapi/joi'

export const applicantSchema = Joi.object({
    firstName: Joi.string().pattern(new RegExp('^[a-z]')).required(),
    lastName: Joi.string().pattern(new RegExp('^[a-z]')).required(),
    middleName: Joi.string().pattern(new RegExp('^[a-z]')).optional(),
    cvUrl: Joi.string().required(),
    email: Joi.string().email(),
    phone: Joi.string().pattern(new RegExp('^[0-9]')).required()
})