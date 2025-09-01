import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-400">
          Taskdrove ✅
        </h1>

        {/* Task input */}
        <TodoForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />

        {/* Filter buttons */}
        <FilterButtons filter={filter} setFilter={setFilter} />

        {/* Task list */}
        <TodoList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}   // ✅ Added editTask
        />
      </div>
    </div>
  );
}
