import AddToDo from "@/components/AddToDo";
import { pocketBaseApp } from "@/lib/models/PocketBase/app";
import React from "react";

const Home = ({ user }: { user: string }) => {
  return (
    <>
      <div className="container w-full max-w-2xl">
        <div className="text-3xl text-center font-bold mb-3 uppercase">
          Todo List
        </div>
        <div>
          <AddToDo user_id={"test"} />
        </div>
      </div>
    </>
  );
};

export default Home;
