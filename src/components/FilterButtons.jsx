import React from "react";

export default function FilterButtons({ filter, setFilter }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="flex justify-center mb-4 space-x-2">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded-lg ${
            filter === f
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
