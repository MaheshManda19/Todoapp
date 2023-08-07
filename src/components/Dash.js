
import React, { useState, useEffect } from "react";
import TaskPopup from "./Popup";
import {  useSelector } from "react-redux";
import "./Dash.css";
import Header from "../common/Header";

function Dash(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [tested, setTested] = useState([]);

  
  const user = JSON.parse(localStorage.getItem('user'));

  console.log(user,"new user")
  const Dash = useSelector((state) => state.Dash);
  const { dashdeatils } = Dash;


  const userIdentifier = user.email;
  console.log(userIdentifier,"gfhfg")


  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem(userIdentifier));
    setTodo(tasks || []);
  }, [dashdeatils]);



  const handleAddCard = () => {
    setShowPopup(!showPopup);
  };

  const handleRemoveTodo = (id) => {
    const updatedDashDeatils = todo.filter((t) => t.title !== id);
    setTodo(updatedDashDeatils);
    removeItemFromLocalStorage(id);



  };
  const removeItemFromLocalStorage = (id) => {
    const key = userIdentifier;
    const data = JSON.parse(localStorage.getItem(key));
  
    if (Array.isArray(data)) {
      const updatedData = data.filter((item) => item.title !== id);
      localStorage.setItem(key, JSON.stringify(updatedData));
    }
  };



  const dragStart = (e, taskId) => {
    console.log("Drag-Started ID ", taskId);
    e.dataTransfer.setData("taskId", taskId);
  };

  const dragOver = (e) => {
    e.preventDefault();
    console.log("Dragging");
  };

const dropInProgress = (e) => {
  e.preventDefault();
  const taskId = e.dataTransfer.getData("taskId");
  const draggedTaskCompleted = completed.find((t) => t.title === taskId);
  const draggedTaskTodo = todo.find((t) => t.title === taskId);

  if (draggedTaskCompleted) {
    const updatedCompleted = completed.filter((t) => t.title !== taskId);
    setCompleted(updatedCompleted);
    setInProgress([...inProgress, draggedTaskCompleted]);
  } else if (draggedTaskTodo) {
    const updatedTodo = todo.filter((t) => t.title !== taskId);
    setTodo(updatedTodo);
    setInProgress([...inProgress, draggedTaskTodo]);
    
  }
};


  const dropCompleted = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const draggedTaskInProgress = inProgress.find((t) => t.title === taskId);
    const draggedTaskTested = tested.find((t) => t.title === taskId);

    if (draggedTaskInProgress) {
      const updatedInProgress = inProgress.filter((t) => t.title !== taskId);
      setInProgress(updatedInProgress);
      setCompleted([...completed, draggedTaskInProgress]);
    } else if (draggedTaskTested) {
      const updatedTested = tested.filter((t) => t.title !== taskId);
      setTested(updatedTested);
      setCompleted([...completed, draggedTaskTested]);
    } else {
      const draggedTask = completed.find((t) => t.title === taskId);
      if (draggedTask) {
        const updatedCompleted = completed.filter((t) => t.title !== taskId);
        setCompleted(updatedCompleted);
        setCompleted((prevCompleted) =>
          prevCompleted.map((t) =>
            t.title === taskId
              ? { ...t, description: draggedTask.description }
              : t
          )
        );
      }
    }
  };

  const dropTested = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const draggedTaskInProgress = inProgress.find((t) => t.title === taskId);
    const draggedTaskCompleted = completed.find((t) => t.title === taskId);

    if (draggedTaskInProgress) {
      const updatedInProgress = inProgress.filter((t) => t.title !== taskId);
      setInProgress(updatedInProgress);
      setTested([...tested, draggedTaskInProgress]);
    } else if (draggedTaskCompleted) {
      const updatedCompleted = completed.filter((t) => t.title !== taskId);
      setCompleted(updatedCompleted);
      setTested([...tested, draggedTaskCompleted]);
    }
  };

  return (
    <>
      <Header />

      <div className="dash-main">
        <div className="Dash-con">
          <div className="Dash-col">
            <h2 style={{ color: "black" }}>TO DO</h2>
            <p style={{ fontWeight: "bold" }} onClick={handleAddCard}>
              Add a Card....
            </p>
            {showPopup && (
              <TaskPopup
                showPopup={showPopup}
                userIdentifier={userIdentifier}
                handleAddCard={handleAddCard}
              />
            )}
            <ul className="all-Todos">
              {todo &&
                todo.map((t) => (
                  <li
                    draggable
                    onDragStart={(e) => dragStart(e, t.title)}
                    onDragOver={dragOver}
                    className="singleTodo"
                    key={t.title}
                  >
                    <span className="todoText">
                      Title: {t.title}
                      <br />
                      <br />
                      Description: {t.description}
                    </span>
                    <p
                      style={{
                        padding: 10,
                        color: "red",
                        fontSize: 15,
                      }}
                      onClick={() => handleRemoveTodo(t.title)}
                    >
                      X
                    </p>
                  </li>
                ))}
            </ul>
          </div>

          <div
            className="Dash-col"
            onDragOver={dragOver}
            onDrop={(e) => dropInProgress(e)}
          >
            <h2 style={{ color: "black" }}>In Progress</h2>
            <br />
            <ul className="all-Todos">
              {inProgress.map((t) => (
                <li
                  draggable
                  onDragStart={(e) => dragStart(e, t.title)}
                  onDragOver={dragOver}
                  className="singleTodo"
                  key={t.title}
                >
                  <span className="todoText">
                    Title: {t.title}
                    <br />
                    <br />
                    Description: {t.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="Dash-col"
            onDragOver={dragOver}
            onDrop={(e) => dropCompleted(e)}
          >
            <h2 style={{ color: "black" }}>Completed</h2>
            <br />
            <ul className="all-Todos">
              {completed &&
                completed.map((t) => (
                  <li
                    draggable
                    onDragStart={(e) => dragStart(e, t.title)}
                    onDragOver={dragOver}
                    className="singleTodo"
                    key={t.id}
                  >
                    <span className="todoText">
                      Title: {t.title}
                      <br />
                      <br />
                      Description: {t.description}
                    </span>
                  </li>
                ))}
            </ul>
          </div>

          <div
            className="Dash-col"
            onDragOver={dragOver}
            onDrop={(e) => dropTested(e)}
          >
            <h2 style={{ color: "black" }}>Tested</h2>
            <br />
            <ul className="all-Todos">
              {tested &&
                tested.map((t) => (
                  <li
                    draggable
                    onDragStart={(e) => dragStart(e, t.title)}
                    onDragOver={dragOver}
                    className="singleTodo"
                    key={t.id}
                  >
                    <span className="todoText">
                      Title: {t.title}
                      <br />
                      <br />
                      Description: {t.description}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dash;
