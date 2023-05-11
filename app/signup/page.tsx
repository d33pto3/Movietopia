"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import signUp from "@/firebase/auth/signup";

type FormType = {
  email: string;
  password: string;
};

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push("/");
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Create a new account</h2>
      <form onSubmit={handleSubmit}>
        {/* {errorMessage && <div className=""></div>} */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded border-gray-400"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            required
            className="w-full p-2 border rounded border-gray-400"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create account
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
