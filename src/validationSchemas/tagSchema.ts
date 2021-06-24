const Joi = require('@hapi/joi');
// Joi.objectId = require('joi-objectid')(Joi)




const tagSchema = {
    creatTag: Joi.object().keys({
        name: Joi.string(),

    }),
    updateTag: Joi.object().keys({
        name: Joi.string(),

    }),

}

export default tagSchema

