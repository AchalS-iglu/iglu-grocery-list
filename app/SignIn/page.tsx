"use client";
import { auth } from "@/lib/Firebase/app";
import { googleSignIn, signIn } from "@/lib/Firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, Toaster } from "react-hot-toast";

import { BsGoogle } from "react-icons/bs";

type SignIn_t = {
  email_username: string;
  password: string;
};

const SignIn = () => {
  const router = useRouter();

  const [user, loading] = useAuthState(auth);

  const [form, setForm] = useState<SignIn_t>({
    email_username: "",
    password: "",
  });

  if (user) {
    router.push('/')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(signIn(form.email_username, form.password), {
      loading: "Signing in...",
      success: "Signed in! Redirecting...",
      error: "Couldn't sign in"
    });
    router.push("/");
  };

  return (
    <section className="flex h-screen justify-center items-center">
      <Toaster />
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
          <div className="">
            <div className="text-center justify-center">
              <p className="font-mono text-orange-700 text-5xl mb-6">
                iglu&apos;s grocery list
              </p>
              <hr className="my-3 h-px rounded bg-orange-900 border-0 mb-6" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address/Username"
                  value={form.email_username}
                  onChange={handleChange}
                  name="email_username"
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  name="password"
                />
              </div>

              {/* <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                    checked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    // for="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Forgot password?
                </a>
              </div> */}
              <div className="mb-3">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-orange-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-200 hover:text-orange-900 hover:shadow-lg focus:bg-orange-200 focus:text-orange-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-200 active:text-orange-900 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
              </div>

              <Link
                type="submit"
                className="inline-block text-center px-7 py-3 bg-orange-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-200 hover:text-orange-900 hover:shadow-lg focus:bg-orange-200 focus:text-orange-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-200 active:text-orange-900 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href={"/Register"}
              >
                Create a New Account
              </Link>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
              <a
                className="px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                // style="background-color: #3b5998"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={googleSignIn}
              >
                <BsGoogle className="w-3.5 h-3.5 mr-2" />
                Continue with Google
              </a>
              {/* <a
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                // style="background-color: #55acee"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-3.5 h-3.5 mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
                Continue with Twitter
              </a> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
