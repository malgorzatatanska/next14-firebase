"use server";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { adminAuth } from "./firebase-admin-config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleLoginByEmail(prevState: any, data: FormData) {
  const email = data.get("email")?.toString();
  const password = data.get("password")?.toString();
  if (!email || !password) {
    return { message: "Email oraz hasło są wymagane" };
  }

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    const authorization = await user?.getIdToken();

    if (authorization) {
      const idToken = authorization;
      const decodedToken = await adminAuth.verifyIdToken(idToken);

      if (decodedToken) {
        const expiresIn = 5 * 60 * 1000;
        const sessionCookie = await adminAuth.createSessionCookie(idToken, {
          expiresIn,
        });
        const options = {
          name: "session",
          value: sessionCookie,
          maxAge: expiresIn,
          httpOnly: true,
          secure: true,
        };

        cookies().set(options);
        return { message: "success" };
      }
    }
  } catch (error) {
    return { message: "problem z logowaniem" };
  }
}

export async function invalidateLogin(token: string) {
  try {
    const decodedClaims = await adminAuth.verifySessionCookie(token, true);
    await adminAuth.revokeRefreshTokens(decodedClaims.uid);
    cookies().delete("session");
    return;
  } catch (err) {}
}

export async function logOutUser() {
  const token = cookies().get("session");
  if (!token?.value) return;
  await invalidateLogin(token?.value);
  cookies().delete("session");
  signOut(auth);
  redirect("/login");
}
