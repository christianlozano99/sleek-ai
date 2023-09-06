"use client";
import { SignInButton } from "@clerk/clerk-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Testing: <SignInButton mode="modal" />
    </div>
  );
}
