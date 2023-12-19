const nodemailer = require("nodemailer");
const { MAIL_SETTINGS, OWNER_EMAIL } = require("../utils/constants");
const { contactMadeTemplate } = require("../utils/mail-templates/contactMade");
const transporter = nodemailer.createTransport(MAIL_SETTINGS);

module.exports.sendMail = async ({ contactForm }) => {
  try {
    let info = await transporter.sendMail({
      from: MAIL_SETTINGS.auth.user,
      to: OWNER_EMAIL,
      subject: "Contact Made",
      html: contactMadeTemplate({ contactForm }),
    });
    return info;
  } catch (error) {
    console.log(error);
    return false;
  }
};
