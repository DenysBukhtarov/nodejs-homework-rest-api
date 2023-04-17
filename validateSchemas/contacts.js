const Joi = require("joi");

const schemaAddContact = Joi.object({
    name: Joi.string().require(),
    email: Joi.string().require(),
    phone: Joi.string().require(),
});

const schemaRequiredCField = Joi.object().keys({
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    phone: Joi.string().optional(),
}).or('name', 'email', 'phone').required();


const schemaUpdateContact = Joi.object({});

module.exports = {schemaAddContact, schemaRequiredCField, schemaUpdateContact};