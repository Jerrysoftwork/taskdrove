import React, { useState } from "react";

export default function TodoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTask(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-grow px-2 py-1 rounded border border-gray-300"
        />
      ) : (
        <span
          onClick={() => toggleTask(task.id)}
          className={`flex-grow cursor-pointer ${
            task.completed
              ? "line-through text-gray-500"
              : "text-gray-900 dark:text-gray-100"
          }`}
        >
          {task.text}
        </span>
      )}

      <div className="flex space-x-2 ml-2">
        <button
          onClick={handleEdit}
          className="px-2 py-1 text-xs bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
