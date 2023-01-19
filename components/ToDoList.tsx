import { ToDo_t } from "@/lib/models/todo";
import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos }: { todos: ToDo_t[] }) => {
  return (
    <table id="todo_table" className="table w-full">
      <thead>
        <tr>
          <th className="text-center px-1 py-2 bg-orange-500 text-orange-100 rounded-tl-xl">
            #
          </th>
          <th className="text-left px-1 py-2 bg-orange-500 text-orange-100">
            Details
          </th>
          <th className=" px-1 py-2 bg-orange-500 text-orange-100 rounded-tr-xl">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {todos.length <= 0 ? (
          <tr className="odd:bg-orange-100 even:bg-orange-50">
            <td className="text-center  px-1 py-2 text-orange-800" colSpan={3}>
              No Todos found. Add a few to begin.
            </td>
          </tr>
        ) : (
          ""
        )}
        {todos.map((todo, index) => {
          return <ToDoItem key={index} todo={todo} index={index} />;
        })}
      </tbody>
    </table>
  );
};

export default ToDoList;
