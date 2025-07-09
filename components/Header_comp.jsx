"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";

export const Header_comp = () => {
  const { isLoading } = useStoreUser();

  return (
    <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60 flex gap-4 p-4">
         <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">   <Image
            src={"/logos/logo.png"}
            alt="splitr Logo"
            width={200}
            height={60}
            className="h-11 w-auto object-contain"
          /></Link>


        {/* <SignedOut>
          <SignInButton>
            <button className="bg-black text-white rounded-sm border border-black px-4 py-2 m-2 font-semibold hover:bg-white hover:text-black transition-colors duration-200">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-black text-white rounded-sm border border-black px-4 py-2 font-semibold hover:bg-white hover:text-black transition-colors duration-200">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}



      </nav>

      {isLoading &&  <BarLoader width={"100%"}  /> }



    </header>
  );
};
