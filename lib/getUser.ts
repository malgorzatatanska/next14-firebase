"use server";
import { cookies } from "next/headers";
import { adminAuth, customInitApp } from "./firebase-admin-config";

customInitApp();

const getUser = async () => {
  const session = cookies().get("session")?.value;
  if (!session) {
    return null;
  }
  try {
    const user = await adminAuth.verifySessionCookie(session, true);
    return user;
  } catch (error) {
    return null;
  }
};

export default getUser;
