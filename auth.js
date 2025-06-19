import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
import { db } from "./lib/db"

import { getUserById } from "./actions/getUser"
 
const prisma = new PrismaClient()
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({user}){
      console.log("LINKING ACCOUNT");
      await db.user.update({
        where: {id: user.id},
        data: {emailVerified: new Date()}
      })
    }
  },
  callbacks: {
    async signIn({user, account}){
      //Allow OAuth without email verification
      if (account?.provider !== "credentials") {
        return true
      }

      //Prevent sign in w/o email verification
      const existingUser = await getUserById(user.id);
      if (!existingUser?.emailVerified) {
        return false;
      }

      //Todo: Add 2FA check

      return true;

    },
    async session ({token, session}){

      if (token.sub && session.user){
        session.user.id = token.sub;
      }

      if (token.role && session.user){
        session.user.role = token.role;
      }

      console.log(token);
      return session;
    },
    async jwt({token}){
      
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;
      
      return token;


    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
})