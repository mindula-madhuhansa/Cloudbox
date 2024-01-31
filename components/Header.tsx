import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-5">
        <div className="bg-[#035FFE] w-fit p-2">
          <Image
            className="invert"
            src="https://www.shareicon.net/download/2015/09/22/644697_cloud_512x512.png"
            alt="cloudbox logo"
            height={50}
            width={50}
          />
        </div>
        <h1 className="font-bold text-xl">Cloudbox</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
