import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./action";
import "./Popup.css";

function TaskPopup({ showPopup, handleAddCard, userIdentifier }) {
  const [dash, setDash] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setDash({ ...dash, [e.target.name]: e.target.value });
  };

  const dashexistingData =
    JSON.parse(localStorage.getItem(userIdentifier)) || [];

  const newData = [...dashexistingData, dash];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(dash));

    localStorage.setItem(userIdentifier, JSON.stringify(newData));
    console.log("gfrejg", userIdentifier);

    handleAddCard();
  };

  return (
    <div className={`popup ${showPopup ? "active" : ""}`}>
      <div className="popup-content">
        <p className="pop-up-close" onClick={handleAddCard}>
          X
        </p>
        <h3>Add a Task</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={dash.title}
            onChange={onChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={dash.description}
            onChange={onChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default TaskPopup;
