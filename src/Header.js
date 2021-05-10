import React from "react";

const headerStyle = {
  color: "#ffffff",
  padding: "5%",
  border: "1px solid #ffffff"
};

const Header = () => {
  return (
    <header>
      <h1 style={headerStyle}>Task List</h1>
    </header>
  );
};

export default Header;
