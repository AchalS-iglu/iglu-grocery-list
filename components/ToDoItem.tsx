import { deleteTodo, ToDo_t, toggleTodo } from "@/lib/models/todo";
import React from "react";
import { toast } from "react-hot-toast";

const ToDoItem = ({ todo, index }: { todo: ToDo_t; index: number }) => {
  return (
    <tr
      key={index}
      className={
        "transition duration-300" +
        (todo.completed === false
          ? " odd:bg-orange-100 even:bg-orange-50 "
          : " bg-green-100 line-through ")
      }
    >
      <td className="text-center  px-1 py-2 text-orange-800">{index + 1}</td>
      <td className=" px-1 py-2 text-orange-800">{todo.desc}</td>
      <td className="text-center  px-1 py-2 text-orange-800 flex gap-3 justify-start">
        {todo.completed === false ? (
          <button
            onClick={() => {
              toggleTodo(todo);
              toast.success("Todo marked as completed!");
            }}
            className="text-orange-600"
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        ) : (
          ""
        )}
        {todo.completed === true ? (
          <button
            onClick={() => {
              toggleTodo(todo);
              toast.error("Todo marked as incomplete!");
            }}
            className="text-orange-600"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          ""
        )}
        <button
          onClick={() => {
            deleteTodo(todo);
            toast.error("Todo deleted!");
          }}
          className="text-orange-600"
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default ToDoItem;
