const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");
const { request } = require("express");


exports.auth = async (req,res,next) => {

    try {
        const token = req.cookies.token || req.body.token || req.header("Authorisation").replace("Bearer","");

        if(!token){
            return res.status(401).json({
                success:false,
                message:' token is  missing',  
            });
        }

         try {
            const decode = await jwt.verify(token, process.env.JWT_SECRET);

            console.log(decode);
            request.user=decode;

         } catch (error) {
            return res.status(401).json({
                success:false,
                message:'Token is invalid'
            });
           
         } 
         next();

    } catch (error) {
        return res.status(401).json({
                success:false,
                message:'Something went wrong , while validating token',
            });
    }

}

exports.isStudent = async (req,res,next) => {

    try {
        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for students only"
            })
        }

            
         next();

    } catch (error) {
        return res.status(401).json({
                success:false,
                message:'User Role can not veriefied, try again',
            });
    }

}

exports.isInstructor = async (req,res,next) => {

    try {
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Instructor only"
            })
        }

            
         next();

    } catch (error) {
        return res.status(401).json({
                success:false,
                message:'User Role cannot veriefied, try again',
            });
    }

}

exports.isAdmin = async (req,res,next) => {

    try {
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Admin only"
            })
        }

            
         next();

    } catch (error) {
        return res.status(401).json({
                success:false,
                message:'User Role cannot veriefied, try again',
            });
    }

}