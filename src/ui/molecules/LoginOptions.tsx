"use client";
import { signInWithRedirect } from "firebase/auth";
import Link from "next/link";
import { auth, googleProvider } from "../../../lib/firebase-config";
import { useCheckUserLoggedIn } from "@/helpers/hooks";

export const LoginOptions = () => {
  const handleGoogleLogin = async () => {
    await signInWithRedirect(auth, googleProvider);
  };
  useCheckUserLoggedIn();

  return (
    <>
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
      >
        Google
      </button>
      <Link
        href="/login"
        className="bg-green-500 text-white p-4 rounded-md hover:bg-green-600 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200"
      >
        Email
      </Link>
      <button className="bg-purple-500 text-white p-4 rounded-md hover:bg-purple-600 focus:outline-none focus:border-purple-700 focus:ring focus:ring-purple-200">
        Facebook
      </button>
    </>
  );
};
