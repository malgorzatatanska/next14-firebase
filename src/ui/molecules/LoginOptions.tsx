"use client";
import { signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { auth, googleProvider } from "../../../lib/firebase-config";
import { useRouter } from "next/navigation";

export const LoginOptions = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const user = await signInWithPopup(auth, googleProvider);
    if (!user) return;

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await user.user.getIdToken()}`,
        },
      });
      if (response.status === 200) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      console.error("Error checking user login:", error);
    }
  };

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
