import React, { useState } from "react";
import "./AddToDoForm.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddToDoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title: inputValue }));
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input-group input-group-sm mb-3 w-100 input-add"
          type="text"
          placeholder="Add Todo..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          type="submit"
          className="add-btn btn btn-outline-light p-1"
          disabled={!inputValue}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddToDoForm;
