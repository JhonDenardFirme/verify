import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string()            //.min(6) But we dont do that here
}) 