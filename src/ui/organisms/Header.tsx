import Link from "next/link";
import { AuthMenu, LoginOptions } from "../molecules";
import getUser from "../../../lib/getUser";

export const Header = async () => {
  const user = await getUser();

  return (
    <header className="bg-gray-200 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-gray-800 font-semibold text-xl">
          <Link href="/">Home</Link>
        </div>
        <nav className="space-x-4">
          {user ? <AuthMenu /> : <LoginOptions />}
        </nav>
      </div>
    </header>
  );
};
