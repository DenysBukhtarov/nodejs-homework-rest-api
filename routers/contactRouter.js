const express = require("express");

const ctrl = require("../controllers/contacts");

const {
isValidId,
validateAddContact,
validateUpdateContact,
validateFieldsContact,
validateUpdateFavorite,
validateFieldsFavorite,
authenticate,
} = require("../middlewares");

const { schemas } = require("../db/models/contactModel");

const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate,  isValidId, ctrl.getContactById);

router.post("/", authenticate,  validateAddContact(schemas.schemaAddContact), ctrl.addContact);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateUpdateFavorite(schemas.schemaUpdateContact),
  validateFieldsFavorite(schemas.schemaUpdateFavorite),
  ctrl.updateStatusContact
);

router.put("/:contactId", 
authenticate,
isValidId,
validateUpdateContact(schemas.schemaUpdateContact), 
validateFieldsContact(schemas.schemaRequiredField),  
ctrl.updateContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.removeContact);

module.exports = router;