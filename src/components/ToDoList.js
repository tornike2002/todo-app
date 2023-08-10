import React from "react";
import "./ToDoList.css";
import { useDispatch } from "react-redux";
import { removeTodo, handleToggle } from "../redux/todoSlice";
const ToDoList = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckbox = () => {
    dispatch(handleToggle({ id: id, completed: completed }));
  };
  const handleRemove = () => {
    dispatch(removeTodo({ id: id }));
  };
  return (
    <div>
      <div
        style={{ width: "600px", maxWidth: "100%" }}
        className={`d-flex p-2 mt-1 justify-content-between align-items-center ${completed && "successed"}`}
      >
        <input
          type="checkbox"
          className="mr-3"
          checked={completed}
          onChange={handleCheckbox}
        />
        <p className="todo-title">{title}</p>
        <button
          onClick={handleRemove}
          className="todo-btn btn btn-outline-light p-2"
        >
          REMOVE
        </button>
      </div>

      <hr className="w-100 text-danger mt-3" />
    </div>
  );
};

export default ToDoList;
