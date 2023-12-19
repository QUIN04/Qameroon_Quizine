const { APP_HOST } = require("../constants");

exports.contactMadeTemplate = ({ contactForm }) => {
  return `
      <div
          class="container"
          style="max-width: 90%; margin: auto; padding-top: 20px"
        >
          <h4></h4>
          <p style="margin-bottom: 30px;">Contact Made</p>
          <div>
            <h1 style="font-size: 18px;">You have been contacted by: ${contactForm.name} with email: ${contactForm.email}</h1>
            </br>
            <h1>On the subject: ${contactForm.subject}</h1>
          </div>
          <p style="background: pink; margin-top: 20px; padding: 1rem; border-radius: 7px; color: #fff;">Click the link <a href="${APP_HOST}/api/contact/${contactForm._id}">${APP_HOST}/api/contact/${contactForm._id}</a> to get more details</p>
        </div>
      `;
};
