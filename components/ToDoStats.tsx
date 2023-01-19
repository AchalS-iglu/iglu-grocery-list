import React from "react";

const ToDoStats = ({
  stats,
}: {
  stats: { remaining: number; completed: number };
}) => {
  return (
    <small id="todo_stats" className="text-xs text-gray-500">
      {stats.remaining} Todos pending, {stats.completed} Completed.
    </small>
  );
};

export default ToDoStats;