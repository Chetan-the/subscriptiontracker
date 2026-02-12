import mongoose from "mongoose";
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {JWT_SECRET,JWT_EXPIRES_IN} from '../config/env.js';
export const signUp=async(req,res,next) =>{
    const session=await mongoose.startSession();
    session.startTransaction();
    try{
        const{name,email,password}=req.body;
        //checking if user exists or not
         const exisistingUser=await User.findOne({email});
         if(exisistingUser){
            const error=new Error('user already exists');
            error.statuscode=409;
            throw error; 
         }
         //hash password
         const salt=await bcrypt.genSalt(0);
         const hashedPassword=await bcrypt.hash(password,salt);
         const newUsers=await User.create([{name,email,Password:hashedPassword}],{session});
         const token=jwt.sign({userId:newUsers[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});


        await session.commitTransaction();
        session.endSession();
        res.status(201).json(
            {
                json:true,
                message:'User created successfully',
                data:{
                    token,
                    user:newUsers[0],

                }
            }
        )
    }catch(error){
        await session.abortTransaction();
        session.endSession();
        next(error);

    }
};
export const signIn=aysnc(req,res,next)=>{};
export const signOut=async(req,res,next)=>{};
