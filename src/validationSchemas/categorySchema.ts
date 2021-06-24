const Joi = require('@hapi/joi');
// Joi.objectId = require('joi-objectid')(Joi)




const categorySchema = {
    creatCategory: Joi.object().keys({
        name: Joi.string(),

    }),
    updateCategory: Joi.object().keys({
        name: Joi.string(),

    }),

}

export default categorySchema

