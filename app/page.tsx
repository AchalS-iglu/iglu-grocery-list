"use client";
import AddToDo from "@/components/AddToDo";
import ToDoList from "@/components/ToDoList";
import ToDoStats from "@/components/ToDoStats";
import { auth } from "@/lib/Firebase/app";
import { handleSignOut } from "@/lib/Firebase/auth";
import { UserContext } from "@/lib/Firebase/context";
import { getTodos, ToDo_t } from "@/lib/models/todo";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, Toaster } from "react-hot-toast";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [todos, setToDos] = useState<ToDo_t[]>([]);

  getTodos(user?.uid ?? "TEST")
    .then((data) => setToDos(data))
    .catch((err) => console.log(err));

  const calcStats = (todos: ToDo_t[]) => {
    return {
      remaining: todos.filter((todo) => !todo.completed).length,
      completed: todos.filter((todo) => todo.completed).length,
    };
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    router.push("/SignIn");
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ user: user }}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="flex justify-center">
        <div className="container w-full max-w-2xl">
          <div className="flex justify-center mt-4">
            {/* <button className="px-3 my-2 bg-white text-white rounded-md hover:bg-white hover:text-white focus:bg-white focus:text-white focus:outline-none focus:ring-0 active:bg-white active:text-white transition duration-150 ease-in-out">
              Sign Out
            </button> */}
            <div className="text-3xl text-center font-mono mb-3 uppercase">
              iglu&apos;s grocery list
            </div>
          </div>
          <AddToDo user_id={user.uid} />
          <div className="bg-gray-100 mt-5 p-5 rounded-xl shadow-lg text-gray-700">
            <div className="flex justify-between mb-3 mt-0">
              <div>
                <h1 className="font-bold text-xl italic block leading-none">
                  Todos
                </h1>
                <ToDoStats stats={calcStats(todos)} />
              </div>
              <button
                className="px-3 py-2 bg-orange-500 text-white rounded-md shadow-md  hover:bg-orange-200 hover:text-orange-900 hover:shadow-lg focus:bg-orange-200 focus:text-orange-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-200 active:text-orange-900 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                  toast.promise(handleSignOut(), {
                    loading: "Signing out...",
                    success: "Signed out!",
                    error: "Error signing out",
                })
              router.push('/SignIn')}}
              >
                Sign Out
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              <ToDoList todos={todos} />
            </div>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Home;
