"use client";
import { useRef } from "react";
import { Variants } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import { useOnClickOutside } from "@/shared/hooks";
import { DecodedIdToken } from "firebase-admin/auth";
import HamburgerIcon from "../atoms/HamburgerIcon";
import { AuthMenu, LoginOptions } from ".";

interface MobileMenuProps {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
  isLoggedIn: DecodedIdToken | null;
}

export const mobileMenuAnimation: Variants = {
  initial: {
    x: "100%",
  },
  show: {
    x: 0,
  },
  hide: {
    x: "100%",
  },
};

export const MobileMenu = ({
  isMobile,
  setIsMobile,
  isLoggedIn,
}: MobileMenuProps) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsMobile(false));
  const handleToogleMenu = () => {
    isMobile ? setIsMobile(false) : setIsMobile(true);
  };

  const mobileMenuAppearance = classNames(
    "fixed h-full flex flex-co pt-10 w-2/6  bg-white  right-0 top-0  justify-center overflow-y-auto shadow-mobileMenu rounded-2xl rounded-2xl",
    {
      hidden: !isMobile,
    }
  );
  return (
    <nav ref={ref}>
      {!isMobile && (
        <button className="h-full z-0 relative " onClick={handleToogleMenu}>
          <HamburgerIcon />
        </button>
      )}
      <AnimatePresence>
        {isMobile && (
          <motion.div
            className={mobileMenuAppearance}
            variants={mobileMenuAnimation}
            initial="initial"
            animate="show"
            exit="hide"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            key="menu-mobile"
          >
            <div className="">
              <div className="flex flex-col  text-left gap-5 h-full">
                <h3 className="pb-8 text-black text-base font-semibold">
                  MENU
                </h3>{" "}
                {isLoggedIn ? (
                  <div className="flex flex-col justify-between h-full mb-20">
                    <AuthMenu handleToogleMenu={handleToogleMenu} />
                  </div>
                ) : (
                  <LoginOptions handleToogleMenu={handleToogleMenu} />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
