const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contact.contoller");

router.post("/", contactController.makeContact);

router.get("/", contactController.getContactForms);

router.get("/:formId", contactController.getContactFormById);

router.delete("/:formId", contactController.deleteContactFormById);

module.exports = router;
