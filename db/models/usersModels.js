const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = 
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const usersSchema = new Schema(
  {
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required:  [true, "Email is required"],
      unique: true,
    },
    subcription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false }
);

const Contact = model("contact", contactSchema);

const schemaAddContact = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean().optional(),
});

const schemaUpdateContact = Joi.object({});

const schemaRequiredField = Joi.object()
    .keys({
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    phone: Joi.string().optional(),
    favorite: Joi.boolean().optional(),
    })
    .or("name", "email", "phone", "favorite")
    .required();

    const subscUpdateSchema = Joi.object({ subcription: Joi.String().valid("starter", "pro", "business").required });

    const schemas = {
        registerSchema,
        loginSchema,
        subscUpdateSchema,
    };
 
module.exports = {User, schemas};