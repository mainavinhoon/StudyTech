const NodeMailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        
        
        let transporter = NodeMailer.createTransport({
            host: process.env.MAIL_HOST,

            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        });

        let info = await transporter.sendMail({
            from:"Navin rawat from EdTech",
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`

        });
        console.log( "Mail info", info);
        return info;
 
    } catch (error) {
        
    }
};

module.exports = mailSender;