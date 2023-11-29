import { defineEventHandler, createError } from "h3";
import mailgun from "mailgun-js";
import validator from "validator";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Add testing delay
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  // Validate inputs
  const errors = {};
  if (!body.name || validator.isEmpty(body.name)) {
    errors.name = "Name is required.";
  }
  if (!body.email || validator.isEmpty(body.email)) {
    errors.email = "Email is required.";
  } else if (!validator.isEmail(body.email)) {
    errors.email = "Email is not valid.";
  }
  if (!body.message || validator.isEmpty(body.message)) {
    errors.message = "Message is required.";
  }

  // If there are validation errors, return them
  if (Object.keys(errors).length > 0) {
    return createError({
      statusCode: 400,
      statusMessage: "Validation errors",
      data: errors,
    });
  }

  // Setup Mailgun
  const config = useRuntimeConfig();
  const mg = mailgun({
    apiKey: config.private.mailgunApiKey,
    domain: config.private.mailgunDomain,
    host: "api.eu.mailgun.net",
  });

  const data = {
    from: "Website Contact Request <contact@jacovan.co.uk>",
    to: "jaco@vancran.com",
    subject: `New Message from ${body.name}`,
    text: `You have received a new message:\n\nName: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
  };

  try {
    await mg.messages().send(data);
    return { message: "Email sent successfully" };
  } catch (error) {
    console.error(error);
    return createError({
      statusCode: 500,
      statusMessage: "Error sending email",
    });
  }
});
