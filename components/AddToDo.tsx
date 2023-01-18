'use client';

import { ToDo_t } from "@/models/todo";
import React, { useState } from "react";

const AddToDo = ({user_id}: {user_id: string}) => {
  const [form, setForm] = useState<ToDo_t>({
    id: "",
    desc: "",
    completed: false,
    created: 0,
    updated: 0,
    user_id: user_id,
  });

  return (
    <form onSubmit={(e) => {console.log(form)}} className="flex justify-center ">
      <input
        type="text"
        name="todo"
        placeholder="Enter Todo"
        className="text-xl text-orange-800 placeholder-orange-400 py-2 px-5 bg-orange-100 rounded-l-full outline-orange-300"
        value={form.desc}
        onChange={(e) => {
          setForm({ ...form, desc: e.target.value });
        }}
      />
      <button
        type="submit"
        className="text-xl text-orange-100 placeholder-orange-400 py-2 pr-5 pl-4 bg-orange-500 rounded-r-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </form>
  );
};

export default AddToDo;
