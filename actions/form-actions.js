'use server';

import bcryptjs from "bcryptjs"
import { db } from '@/lib/db';
import { getUserByEmail } from './getUser';

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export async function handleFormSignUp(prevState, formData){
    console.log("Received formData:", formData);

    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const error = {};


    if(!name || name.trim().length === 0){
        console.log('error 1');
        error.name = 'Please enter your name';
    }

    if(!email || email.trim().length === 0){
        console.log('error 1');
        error.field = 'Please enter your email';
    } else if(!email.includes('@') || !email.includes('.com')){
        console.log('error 2');
        error.email = 'Please enter a valid email';
    }

    if(!password || password.trim().length === 0){
        console.log('error 3');
        error.password = 'Please enter your password';
    }

    if(password.trim().length < 6){
        error.length = 'Passwords must be atleast 6 characters';
    }

    //Check existing user

    const existingUser = await getUserByEmail(email);

    if (existingUser){
        error.duplicate = 'Email already exists';
        console.log(error.duplicate);
        return { error };
    }



    if (Object.keys(error).length > 0){
        console.log(error);
        return{error};
    }



    //Encrypt Password after all checks

    const hashedPassword = await bcryptjs.hash(password, 10);

    //Create user in Database

    try {
        await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });   
    } catch (dbError){
        console.error('Error creating user:', dbError);
        return { error: { 
            db: 'Failed to create user, Email already exists' 
        } };
    }


    const success = { message: 'Account Registered' };
    console.log(success);
    return { success };


}









export async function handleFormLogin(prevState, formData){
    console.log("Received formData:", formData);

    
    const email = formData.get('email');
    const password = formData.get('password');
    const error = {};


    if(!email || email.trim().length === 0){
        console.log('error 1');
        error.field = 'Please enter your email';
    } else if(!email.includes('@') || !email.includes('.com')){
        console.log('error 2');
        error.email = 'Please enter a valid email';
    }

    if(!password || password.trim().length === 0){
        console.log('error 3');
        error.password = 'Please enter your password';
    } else if(password.trim().length < 6){
        error.length = 'Passwords must be atleast 6 characters';
    }


    //Check existing user



    if (Object.keys(error).length > 0){
        console.log(error);
        return{error};
    }


    const existingUser = await getUserByEmail(email);
    console.log("EXISTING USER", existingUser);

    if (!existingUser){
        error.user = "No user found with this email"
        return {error};
    }

    const passwordMatch = await bcryptjs.compare(password, existingUser.password);

    if (!passwordMatch){
        error.password = "Password mismatch"
        return {error};
    }



    //FOR EMAIL CONFIRMATION
    if (!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(existingUser.email);
        const success = { message: 'Email Verification sent!' };
        console.log(success);
        
    }

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(verificationToken.email, verificationToken.token);
        


    
    // If everything is fine, sign in the user
    try {
        await signIn("credentials", {
            email,
            password,
            redirect: true,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        });
    } catch (authError) {
        console.log(authError);
        
    }
    
    const success = { message: 'Verification Email Sent' };
    console.log(success);
    return { success };


}