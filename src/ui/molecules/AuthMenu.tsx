"use client";
import Link from "next/link";
import { logOutUser } from "../../../lib/actions";

export const AuthMenu = () => {
  return (
    <>
      <div>
        <Link
          href="/dashboard"
          className="bg-green-500 text-white p-4 rounded-md hover:bg-green-600 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200"
        >
          Dashboard
        </Link>{" "}
      </div>
      <div>
        <form action={logOutUser}>
          <button className="bg-purple-500 text-white p-4 rounded-md hover:bg-purple-600 focus:outline-none focus:border-purple-700 focus:ring focus:ring-purple-200">
            Wyloguj
          </button>
        </form>
      </div>
    </>
  );
};
