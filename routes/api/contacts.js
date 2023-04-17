const express = require("express");
const router = express.Router();
const listContacts = require("../../models/contacts");
const getById = require("../../models/contacts");
const addContact = require("../../models/contacts");
const removeContact = require("../../models/contacts");
const updateContact = require("../../models/contacts");
const validateData = require("../../helpers/addValidator");
const validateUpdateData = require("../../helpers/updateValidator")

router.get("/",listContacts);

router.get("/:contactId", getById);

router.post("/", validateData, addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", validateUpdateData, updateContact);

module.exports = router
