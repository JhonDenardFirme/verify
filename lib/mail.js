import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email, token, user) => {
    //const confirmLink = `http://localhost:3000/home`;

    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;


    await resend.emails.send({
        from:'Verify <onboarding@resend.dev>',
        to: email,
        subject: "Confirm your email",
        html: `<p>Welcome! Click <a href="${confirmLink}">here</a> to confirm your email.</p>`
    });

    console.log("EMAIL SENT RESEND");

}