"use client";
import { initFirebase } from "@/firebase/config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const app = initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const watchPopularMovies = () => {
    router.push("/movies");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <div>
        <div className="ml-5 my-3">Welcome {user.displayName}!</div>
        <button
          className="bg-red-600 text-white rounded-md p-2 w-48 m-5"
          onClick={watchPopularMovies}
        >
          Popular Movies
        </button>
      </div>
    );
  }

  const signIn = async (e: any) => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  return (
    <main>
      <button
        onClick={signIn}
        className="bg-blue-600 text-white rounded-md p-2 w-48 m-3 ml-5"
      >
        Sign In
      </button>
    </main>
  );
}
