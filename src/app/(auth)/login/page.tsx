import { Metadata } from "next";
import LoginForm from "./LoginForm";
import Link from "next/link";
import signupImage from "@/assets/login-illy.jpeg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to SkreebuSpace",
  keywords: ["Login", "account"],
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="bg-card flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-center text-3xl font-bold hi-sp">
            Login to <span className="text-primary">SkreebuSpace</span>
          </h1>
          <div className="space-y-5">
            <LoginForm />
            <Link
              href="/signup"
              className="hi-sp block text-center "
            >
              Not a Powernerdian yet?  <span className="text-primary hover:underline">Sign up</span>
            </Link> 
          </div>
        </div>
        <Image
          src={signupImage}
          alt="SkreebuSpace Illustration"
          objectFit="cover"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
