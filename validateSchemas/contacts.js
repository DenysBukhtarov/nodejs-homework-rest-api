const Joi = require("joi");

const schemaAddContact = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
});

const schemaRequiredField = Joi.object().keys({
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    phone: Joi.string().optional(),
}).or('name', 'email', 'phone').required();


const schemaUpdateContact = Joi.object({});

module.exports = {schemaAddContact, schemaRequiredField, schemaUpdateContact};