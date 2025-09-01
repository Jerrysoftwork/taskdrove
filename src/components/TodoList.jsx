import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
