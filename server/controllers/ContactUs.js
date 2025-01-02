const { contactUsEmail } = require("../mail/templates/contactFormRes")
const mailSender = require("../utils/MailSender")

exports.contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } = req.body
  console.log(req.body)
  try {

    const detail = await ContactUs.create({
      email,
      firstName,
      lastName,
      message,
      phoneNo
  })

  // return res.status(200).json({
  //     success:true,
  //     data:detail,
  //     message:"Message sent Successfully"
  // })

    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode)
    )
    console.log("Email Res ", emailRes)
    return res.json({
      success: true,
      data:detail,
      message: "Email/Message sent successfully",
    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}