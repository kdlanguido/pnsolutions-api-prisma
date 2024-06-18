import * as Joi from '@hapi/joi'

export const surveyQuestionSchema = Joi.object({
    question: Joi.string()
})