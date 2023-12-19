require("dotenv").config();

module.exports = {
  MAIL_SETTINGS: {
    service: "gmail",
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASSWORD,
    },
    port: 465,
    host: "smtp.gmail.com",
  },
  OWNER_EMAIL: process.env.OWNER_EMAIL,
  APP_HOST: process.env.APP_HOST,
  STATUS_CODES: {
    ERROR: {
      MOVED_PERMANENTLY: 301,
      MOVED_TEMPORARILY: 302,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      PAYMENT_REQUIRED: 402,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      METHOD_NOT_ALLOWED: 405,
      ACCOUNT_SUSPENDED: 410,
      UNSUPPORTED_MEDIA_FORMAT: 415,
      VALIDATION_ERRORS: 422,
      REQUEST_CONTROL: 429,
      SERVER_ERROR: 500,
    },
    SUCCESS: {
      SUCCESSFUL_REQUEST: 200,
      CREATED_SUCCESSFULLY: 201,
    },
  },
};
