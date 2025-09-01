import React from "react";

export default function TodoForm({ newTask, setNewTask, addTask }) {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="flex-grow px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Enter a task..."
      />
      <button
        onClick={addTask}
        className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition"
      >
        Add
      </button>
    </div>
  );
}
