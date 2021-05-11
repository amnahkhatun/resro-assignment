//Built in
import React, { useState } from "react";
//mock data
import data from "./data.json";
//Internal
import Header from "./Header";
import TaskList from "./TaskList";

import "./styles.css";

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput, time) => {
    let color;
    if (time <= 120 && time > 0) {
      color = "green";
    } else {
      color = "red";
    }
    let copy = [...toDoList];
    copy = [
      ...copy,
      {
        id: toDoList.length + 1,
        task: userInput,
        complete: false,
        color
      }
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header />
      <TaskList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
