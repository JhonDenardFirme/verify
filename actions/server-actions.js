"use client";

import { signIn, signOut } from "next-auth/react";

export async function handleGoogleSignin(){
     await signIn('google');
}

export async function handleGitHubSignin(){
     await signIn('github');
}

export async function handleSignout() {
     await signOut();  // No need for async/await
}