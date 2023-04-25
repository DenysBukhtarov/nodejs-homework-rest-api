const express = require("express");

const ctrl = require("../controllers/contacts");

const {
isValidId,
validateAddContact,
validateUpdateContact,
validateFieldsContact,
validateUpdateFavorite,
validateFieldsFavorite,
} = require("../../middlewares");

const { schemas } = require("../db/models/contactModel");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateAddContact(schemas.schemaAddContact), ctrl.addContact);

router.path(
  "/:contactId/favorite"
)

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validateUpdateContact(schemaUpdateContact), validateFieldsContact(schemaRequiredField),  ctrl.updateContact);

module.exports = router;

