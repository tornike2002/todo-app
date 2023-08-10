import React from "react";
import { useSelector } from "react-redux";
import ToDoList from "./ToDoList";

const ToDoListDest = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos.map((todos) => (
        <ToDoList
          id={todos.id}
          title={todos.title}
          completed={todos.completed}
        />
      ))}
    </div>
  );
};

export default ToDoListDest;
