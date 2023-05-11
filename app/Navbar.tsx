"use client";

import Link from "next/link";
import Image from "next/image";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { initFirebase } from "@/firebase/config";

type NavItemProps = {
  href: string;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, label }) => (
  <Link href={href}>
    <p className="block px-4 py-2 text-gray-900 font-medium hover:text-gray-600">
      {label}
    </p>
  </Link>
);

const Navbar: React.FC = () => {
  const app = initFirebase();
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    router.push("/");
    return (
      <div className="">
        <h1 className="text-center mt-5 text-3xl">Movietopia</h1>
        <span className="ml-5">Please sign in to continue.</span>
      </div>
    );
  }

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 mt-2">
          <div className="flex justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link href={"/"}>
                <p className="font-bold text-xl text-gray-800">Movietopia</p>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavItem href="/" label="Home" />
              <NavItem href="/about" label="About" />
              <NavItem href="/contact" label="Contact" />

              <button
                onClick={() => auth.signOut()}
                className="hover:underline"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
