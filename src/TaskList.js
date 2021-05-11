import React from "react";
import Task from "./Task";
import Timer from "./Timer";

const buttonStyle = {
  backgroundColor: "#ffffff",
  color: "#2962ff",
  padding: "2%",
  borderRadius: "8px",
  margin: "2%"
};

const listStyle = {
  backgroundColor: "#87ceeb",
  margin: "10%",
  padding: "10%"
};

const TaskList = ({ toDoList, handleToggle, handleFilter, color, addTask }) => {
  return (
    <div style={listStyle}>
      {toDoList.map((todo) => {
        return (
          <Task
            key={todo.id + todo.task}
            todo={todo}
            handleToggle={handleToggle}
            color={color}
          />
        );
      })}
      <button style={buttonStyle} onClick={handleFilter}>
        Delete striked
      </button>
      <Timer addTask={addTask} />
    </div>
  );
};

export default TaskList;
