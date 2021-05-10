import React from "react";
import Task from "./Task";
import Timer from "./Timer";

const buttonStyle = {
  backgroundColor: "#ffffff",
  color: "#2962ff",
  padding: "2%",
  borderRadius: "8px"
};

const TaskList = ({ toDoList, handleToggle, handleFilter, color, addTask }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <Task
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
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
