const User = require("../models/User");
const mailSender = require("../utils/MailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const passwordUpdated = require("../mail/templates/passwordUpdate")
exports.resetPasswordToken = async(req,res)=>{

try {
    const email = req.body.email;

    const user = await User.findOne({email: email});
    
    if(!user){
        return res.json({
            success:false,
            message:"Your email is not registered"
        });
    };

    

    const token = crypto.randomUUID();   

    const updatedDetails = await User.findOneAndUpdate(
        {email:email},{token:token,resetPasswordExpires:Date.now() + 5*60*1000,},{new:true});

    
    const url = `http://localhost:3000/update-password/${token}`;

    await mailSender(email,"Password reset Link",   `Password reset LINK : ${url}`);


    return res.json({
        success:true,
        message:"email sent successfully",
    })


} catch (error) {
    
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"Something went wrong while reset password, please try again",
    })
}

}



exports.resetPassword = async(req,res) => {


    try {
        const {password,confirmPassword,token} = req.body;
   
        
        if(password !== confirmPassword){
            return res.json({
                success:true,
                message:"Passwords not matching",
    
            });
        }
    
        const userDetails = await User.findOne({token:token});
    
        if(!userDetails){
            res.json({
                success:false,
                message:"token invalid",
            })
        }
    
        if(userDetails.resetPasswordExpires > Date.now()){
            return res.json({
                success:false,
                message:"token expired"
            });
        }
    
        const hashedPassword = await bcrypt.hash(password,10);
    
        await User.findOneAndUpdate({token:token},{password:hashedPassword},{new:true});
    
        await mailSender(email,"Password reseted Successfully",passwordUpdated(userDetails.email,userDetails.firstName));
        return res.status(200).json({
            success:true,
            message:"Password reseted successfully",
        });

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while reset password, please try again",
        })
        
    }


}