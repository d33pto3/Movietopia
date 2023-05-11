"use client";

import firebase_app from "../config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
  AuthError,
} from "firebase/auth";

const auth = getAuth(firebase_app);

type SignUpResult = {
  result: UserCredential | null;
  error: AuthError | null;
};

export default async function signUp(
  email: string,
  password: string
): Promise<SignUpResult> {
  let result: UserCredential | null = null,
    error: AuthError | null = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    error = err as AuthError;
  }

  return { result, error };
}
