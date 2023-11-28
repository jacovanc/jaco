// server/api/contact.ts
import { defineEventHandler } from "h3";
import mailgun from "mailgun-js";
import validator from "validator";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Sanitize inputs
  const name = validator.escape(body.name);
  const email = validator.escape(body.email);
  const message = validator.escape(body.message);

  // Validate email
  if (!validator.isEmail(email)) {
    return createError({
      statusCode: 400,
      statusMessage: "Invalid email address",
    });
  }

  const config = useRuntimeConfig();
  console.log(
    config.private.mailgunApiKey + " " + config.private.mailgunDomain
  );
  const mg = mailgun({
    apiKey: config.private.mailgunApiKey,
    domain: config.private.mailgunDomain,
    host: "api.eu.mailgun.net",
  });

  const data = {
    from: "Website Enquiry <contact@jacovan.co.uk>",
    to: "jaco@vancran.com",
    subject: `New Message from ${name}`,
    text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
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
