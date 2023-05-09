const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp =
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegexp = 
/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const contactSchema = new Schema(
  {
    name: {

    },
     
    email: {
      type: String,
      match: emailRegexp,
    },

    phone: {
      type: String,
      match: phoneRegexp,
    },

    favorites: {
      type: Boolean,
      default: false,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    }
  },
  { versionKey: false }
);

const Contact = model("contact", contactSchema);

const schemaAddContact = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    phone: Joi.string().pattern(phoneRegexp).required(),
    favorite: Joi.boolean().optional(),
});

const schemaUpdateContact = Joi.object({});

const schemaRequiredField = Joi.object()
    .keys({
    name: Joi.string().optional(),
    email: Joi.string().pattern(emailRegexp).optional(),
    phone: Joi.string().pattern(phoneRegexp).optional(),
    favorite: Joi.boolean().optional(),
    })
    .or("name", "email", "phone", "favorite")
  

    const schemaUpdateFavorite = Joi.object({ favorite: Joi.boolean().required() });

    const schemas = {
        schemaAddContact,
        schemaRequiredField,
        schemaUpdateContact,
        schemaUpdateFavorite,
    };
 
module.exports = {Contact, schemas};