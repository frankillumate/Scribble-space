import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import signupImage from "@/assets/Sign-up-illy.jpeg";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account",
  keywords: ["signup", "account", "create"],
};

function page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="bg-card flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl shadow-2xl">
        <div className="md:w-1/2 w-full space-y-10 overflow-y-auto p-10">
        <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold hi-sp">
                Sign up to <span className="text-primary">SkreebuSpace</span>
            </h1>
            <p className="text-muted-foreground">Your one-stop communication platform for <span className="italic">POWERNERDS</span> </p>
        </div>
        <div className="space-y-5"> 
            <SignUpForm/>
        <Link href='/login' className="block text-center  hi-sp ">
        Already a Powernerdian? Log in to your <span className="text-primary hover:underline">SkreebuSpace account</span>
        </Link> 
        </div>
        </div>
        <Image src={signupImage} alt="" className="hidden w-1/2 md:block object-cover"/>
      </div>
    </main>
  );
}

export default page;
