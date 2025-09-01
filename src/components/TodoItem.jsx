import React from "react";

export default function TodoItem({ task, toggleTask, deleteTask }) {
  return (
    <li
      className={`flex justify-between items-center p-3 rounded-lg transition ${
        task.completed
          ? "bg-green-100 line-through text-gray-600"
          : "bg-gray-50"
      }`}
    >
      <span
        onClick={() => toggleTask(task.id)}
        className="cursor-pointer flex-1"
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="ml-3 text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  );
}
