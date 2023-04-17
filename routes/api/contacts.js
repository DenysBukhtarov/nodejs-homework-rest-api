const express = require("express");
const router = express.Router();
const listContacts = require("../../models");
const getById = require("../../models");
const addContact = require("../../models");
const removeContact = require("../../models");
const updateContact = require("../../models");

router.get("/",listContacts);

router.get("/:contactId", getById);

router.post("/", addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", updateContact);

module.exports = router
