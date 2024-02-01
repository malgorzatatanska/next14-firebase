import Link from "next/link";
import getUser from "../../../lib/getUser";
import { HeaderContent } from "./HeaderContent";

export const Header = async () => {
  const isLoggedIn = await getUser();

  return (
    <header className="bg-gray-200 py-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-gray-800 font-semibold text-xl">
          <Link href="/">Home</Link>
        </div>
        <nav className="w-5/6 flex justify-end">
          <HeaderContent isLoggedIn={isLoggedIn} />
        </nav>
      </div>
    </header>
  );
};
