const express = require("express");
const ctrl = require("../controllers/auth");

const {validateUser, authenticate, validateUpdateSubscr} = require("../middlewares");

const { schemas } = require("../db/models/usersModels");

const router = express.Router();

router.post()

module.exports = router;