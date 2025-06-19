import { getVerificationTokenByEmail } from "@/actions/verificationToken";
import { v4 as uuidv4 } from 'uuid';
import { db } from "./db";

export const generateVerificationToken = async (email) => {
    const token = uuidv4();                                             
    const expires = new Date(new Date().getTime() + 3600 * 1000);       // Expires in 1 hour in MS



    const existingToken = await getVerificationTokenByEmail(email);     // Delete if existing Token
    if (existingToken){
        await db.verificationToken.delete({
            where: {id: existingToken.id},
        });
    }

    const verificationToken = await db.verificationToken.create({
        data: {
            email,
            token,
            expires,
        }
    });

    return verificationToken;
}