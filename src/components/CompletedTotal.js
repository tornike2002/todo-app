import React from "react";
import "./CompletedTotal.css";
import { useSelector } from "react-redux";
const CompletedTotal = () => {
    const todolength = useSelector((state) => state.todos)
  return (
    <div className="todo-completed d-flex justify-content-between align-items-center">
      <h1>Total</h1>
      <h1>{todolength.length}</h1>
    </div>
  );
};

export default CompletedTotal;
