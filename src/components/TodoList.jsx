import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks, toggleTask, deleteTask, editTask }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        No tasks here 🚀
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}   // ✅ pass down
        />
      ))}
    </ul>
  );
}
