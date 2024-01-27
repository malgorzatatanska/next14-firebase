"use server";
import { cookies } from "next/headers";
import { adminAuth, customInitApp } from "./firebase-admin-config";
import { log } from "console";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { revalidatePath } from "next/cache";

customInitApp();

const getUser = async () => {
  const session = cookies().get("session")?.value;
  if (!session) {
    return null;
  }
  try {
    const user = await adminAuth.verifySessionCookie(session, true);
    revalidatePath("/", "layout");
    return user;
  } catch (error) {
    return null;
  }
};

export default getUser;
