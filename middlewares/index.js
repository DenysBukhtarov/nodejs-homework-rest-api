const validateAddContact = require("./validateAddContact")
const validateUpdateContact = require("./validateUpdateContact");
const validateFieldsContact = require("./validateFieldsContact");
const validateUpdateFavorite = require("./validateUpdateFavorite");
const validateFieldsFavorite = require("./validateFieldsFavorite");
const isValidId = require("./isValidId");
const validateUser = require("./validateUser");
const authenticate = require("./authenticate");
const validateUpdateSubscr = require("./validateUpdateSubscr");


module.exports = {
  validateAddContact,
  validateUpdateContact,
  validateFieldsContact,
  validateUpdateFavorite,
  validateFieldsFavorite,
  isValidId,
  validateUser,
  authenticate,
  validateUpdateSubscr,
};