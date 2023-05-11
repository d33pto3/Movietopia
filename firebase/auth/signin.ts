"use client";

import firebase_app from "../config";
import {
  signInWithEmailAndPassword,
  getAuth,
  UserCredential,
  AuthError,
} from "firebase/auth";

const auth = getAuth(firebase_app);

type SignInResult = {
  result: UserCredential | null;
  error: AuthError | null;
};

export default async function signIn(
  email: string,
  password: string
): Promise<SignInResult> {
  let result: UserCredential | null = null,
    error: AuthError | null = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    error = err as AuthError;
  }

  return { result, error };
}
