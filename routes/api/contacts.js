const express = require("express");

const ctrl = require("../../controllers/contacts");

const {validateAddContact,
validateUpdateContact,
validateFieldsContact,
} = require("../../middlewares");

const {schemaAddContact,
schemaUpdateContact,
schemaRequiredField
} = require("../../validateSchemas/contacts")

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateAddContact(schemaAddContact), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validateUpdateContact(schemaUpdateContact), validateFieldsContact(schemaRequiredField),  ctrl.updateContact);

module.exports = router;
