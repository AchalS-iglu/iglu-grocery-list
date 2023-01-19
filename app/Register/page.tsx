'use client';
import { handleSignOut, registerUser } from "@/lib/Firebase/auth";
import { newUser_t } from "@/lib/models/user";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";

const SignIn = () => {
  const router = useRouter();
  const [form, setForm] = useState<newUser_t>({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(registerUser(form.email, form.password), {
      loading: "Creating your account...",
      success: "Account created! Redirecting...",
      error: "Couldn't create account"
    })
    handleSignOut()
    router.push("/SignIn");
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
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  name="email"
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

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Confirm Password"
                  value={form.passwordConfirm}
                  onChange={handleChange}
                  name="passwordConfirm"
                />
              </div>

              <button
                type="submit"
                className="inline-block px-7 py-3 bg-orange-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-200 hover:text-orange-900 hover:shadow-lg focus:bg-orange-200 focus:text-orange-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-200 active:text-orange-900 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Register
              </button>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
              <a
                className="px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                // style="background-color: #3b5998"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <BsGoogle className="w-3.5 h-3.5 mr-2" />
                Continue with Google
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
