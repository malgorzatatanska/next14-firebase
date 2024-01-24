import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth } from "../../../lib/firebase-config";
import { useRouter } from "next/navigation";

export const useCheckUserLoggedIn = () => {
  const router = useRouter();

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if (!userCred) {
        return;
      }
      fetch("/api/auth", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          router.push("/dashboard");
        }
      });
    });
  }, []);
};
