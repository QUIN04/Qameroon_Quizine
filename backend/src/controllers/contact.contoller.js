const ContactForm = require("../models/contact.model");

const { STATUS_CODES } = require("../utils/constants");
const { sendMail } = require("../services/mailingService");
const contactModel = require("../models/contact.model");

exports.makeContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    const contactForm = await new ContactForm({
      name,
      email,
      subject,
      message,
    }).save();

    await sendMail({
      contactForm: contactForm,
    }).catch((err) => {
      console.log(err);
    });

    return res
      .status(STATUS_CODES.SUCCESS.SUCCESSFUL_REQUEST)
      .json({ successful: true });
  } catch (err) {
    console.log(err?.message);
    res.status(STATUS_CODES.ERROR.SERVER_ERROR).send({
      error: err.message || "A server error occured.",
    });
  }
};

exports.getContactForms = async (req, res, next) => {
  try {
    const contactForms = await ContactForm.find().exec();
    return res
      .status(STATUS_CODES.SUCCESS.SUCCESSFUL_REQUEST)
      .json({ forms: contactForms });
  } catch (err) {
    console.log(err?.message);
    res.status(STATUS_CODES.ERROR.SERVER_ERROR).send({
      error: err.message || "A server error occured.",
    });
  }
};

exports.getContactFormById = async (req, res, next) => {
  try {
    const formId = req.params.formId;
    const contactForm = await ContactForm.findById(formId).exec();
    return res
      .status(STATUS_CODES.SUCCESS.SUCCESSFUL_REQUEST)
      .json(contactForm);
  } catch (err) {
    console.log(err?.message);
    res.status(STATUS_CODES.ERROR.SERVER_ERROR).send({
      error: err.message || "A server error occured.",
    });
  }
};

exports.deleteContactFormById = async (req, res, next) => {
  try {
    const formId = req.params.formId;
    await ContactForm.findByIdAndRemove(formId).exec();
    return res
      .status(STATUS_CODES.SUCCESS.SUCCESSFUL_REQUEST)
      .json({ successful: true });
  } catch (err) {
    console.log(err?.message);
    res.status(STATUS_CODES.ERROR.SERVER_ERROR).send({
      error: err.message || "A server error occured.",
    });
  }
};
