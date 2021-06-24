const Joi = require('@hapi/joi');
// Joi.objectId = require('joi-objectid')(Joi)




const snippertSchema = {
    creatSnippert: Joi.object().keys({
        name: Joi.string(),
        language: Joi.string(),
    }),
    updateSnippert: Joi.object().keys({
        name: Joi.string(),
        language: Joi.string(),
    }),

}

export default snippertSchema

