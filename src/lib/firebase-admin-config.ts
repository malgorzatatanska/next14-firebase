import * as admin from "firebase-admin";
import { initializeApp, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
// const serviceAccount = require("@/service-account.json");

export function customInitApp() {
  const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT as string
  );
  if (getApps().length <= 0) {
    return initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } else {
    return getApps()[0];
  }
}
export const initAdmin = customInitApp();
export const adminAuth = getAuth(initAdmin);
