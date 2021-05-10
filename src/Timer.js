import React from "react";
import "./styles.css";

const buttonStyle = {
  backgroundColor: "#ffffff",
  color: "#2962ff",
  padding: "2%",
  borderRadius: "8px"
};

const inputStyle = {
  padding: "2%",
  borderRadius: "8px",
  marginBottom: "5px"
};

const Timer = ({ addTask }) => {
  const [counterSecond, setCounterSecond] = React.useState(0);
  const [counter, setCounter] = React.useState(10);
  const [time, setTime] = React.useState("");
  const [status, setStatus] = React.useState("working");
  const [userInput, setUserInput] = React.useState("");
  const [showModal, setModal] = React.useState(false);

  React.useEffect(() => {
    let secondCounterId;
    let counterId;
    if (status === "working") {
      secondCounterId = setTimeout(
        () => setCounterSecond(counterSecond + 1),
        1000
      );
      counterId = setTimeout(() => setCounter(counter - 1), 1000);
    }

    return () => {
      clearTimeout(counterId);
      clearTimeout(secondCounterId);
    };
  }, [counterSecond, counter, status]);

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const stopTimers = () => {
    setStatus("paused");
    setModal(!showModal);
    setCounterSecond(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTime(counterSecond);
    addTask(userInput, time);
  };

  const handleModal = () => {
    setModal(!showModal);
    setStatus("working");
  };

  return (
    <>
      <button style={buttonStyle} onClick={handleModal}>
        Create Task
      </button>
      {showModal && (
        <>
          <div>Time left to finish the Task: {counterSecond}</div>
          <form onSubmit={handleSubmit}>
            <input
              value={userInput}
              type="text"
              style={inputStyle}
              onChange={handleChange}
              placeholder="Enter title..."
            />
            <button style={buttonStyle}>Add</button>{" "}
          </form>
          <button style={buttonStyle} onClick={stopTimers}>
            Close
          </button>
        </>
      )}
    </>
  );
};

export default Timer;
