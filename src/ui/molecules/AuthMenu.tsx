import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { invalidateLogin } from "../../../lib/actions";

export const AuthMenu = () => {
  async function logOut() {
    "use server";
    const token = cookies().get("session");
    if (!token?.value) return;
    await invalidateLogin(token?.value);
    cookies().delete("session");
    redirect("/login");
  }
  return (
    <div className="flex flex-row items-center gap-2">
      <div>
        <Link
          href="/dashboard"
          className="bg-green-500 text-white p-4 rounded-md hover:bg-green-600 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200"
        >
          Dashboard
        </Link>{" "}
      </div>
      <div>
        <form action={logOut}>
          <button className="bg-purple-500 text-white p-4 rounded-md hover:bg-purple-600 focus:outline-none focus:border-purple-700 focus:ring focus:ring-purple-200">
            Wyloguj
          </button>
        </form>
      </div>
    </div>
  );
};
