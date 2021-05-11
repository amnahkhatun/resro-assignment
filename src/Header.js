import React from "react";

const headerStyle = {
  color: "#87ceeb",
  padding: "5%",
  border: "1px solid #87ceeb"
};

const Header = () => {
  return (
    <header>
      <h1 style={headerStyle}>Task List</h1>
    </header>
  );
};

export default Header;
