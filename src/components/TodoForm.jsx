import React from "react";

export default function TodoForm({ newTask, setNewTask, addTask }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task..."
        className="flex-grow px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={addTask}
        className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        Add
      </button>
    </div>
  );
}
