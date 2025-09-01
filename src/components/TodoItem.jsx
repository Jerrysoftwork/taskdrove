import React, { useState } from "react";

export default function TodoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (editedText.trim()) {
      editTask(task.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 rounded-lg px-3 py-2 shadow-sm">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          className="flex-grow mr-2 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          autoFocus
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          className={`flex-grow cursor-pointer ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800 dark:text-gray-100"
          }`}
        >
          {task.text}
        </span>
      )}

      <div className="flex gap-2 ml-2">
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-2 py-1 text-xs rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => toggleTask(task.id)}
          className="px-2 py-1 text-xs rounded-md bg-green-500 text-white hover:bg-green-600 transition"
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 text-xs rounded-md bg-red-500 text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
