"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { handleLoginByEmail } from "../../../lib/actions";

const initialState = {
  message: "",
};

export const LoginForm = () => {
  const [state, formAction] = useFormState(handleLoginByEmail, initialState);

  useEffect(() => {
    if (state?.message === "success") {
      redirect("/dashboard");
    }
  }, [state]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>

        <form className="space-y-4" action={formAction}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
