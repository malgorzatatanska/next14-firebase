"use client";
import { useState } from "react";
import { AuthMenu, LoginOptions, MobileMenu } from "../molecules";
import { DecodedIdToken } from "firebase-admin/auth";

interface HeaderContentProps {
  isLoggedIn: DecodedIdToken | null;
}

export const HeaderContent = ({ isLoggedIn }: HeaderContentProps) => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="flex h-full lg:hidden">
        <MobileMenu
          isMobile={isMobile}
          setIsMobile={setIsMobile}
          isLoggedIn={isLoggedIn}
        />
      </div>
      <div className="hidden lg:flex flex-row items-center gap-2">
        {!isLoggedIn ? <LoginOptions /> : <AuthMenu />}
      </div>
    </>
  );
};
