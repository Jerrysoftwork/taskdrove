import React from "react";

export default function TodoForm({ newTask, setNewTask, addTask }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={addTask}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Add
      </button>
    </div>
  );
}
