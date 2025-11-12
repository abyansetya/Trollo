import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

sgMail.setApiKey(process.env.SEND_GRID_API!);

const fromEmail = process.env.FROM_EMAIL;

export const sendEmail = async (to: string, subject: string, html: string) => {
  const msg = {
    to,
    from: `Trollo <${fromEmail}`,
    subject,
    html,
  };
  try {
    await sgMail.send(msg);
    console.log("Email sent succesfully");

    return true;
  } catch (error) {
    console.error("Error sending email: ", error);
    return false;
  }
};
