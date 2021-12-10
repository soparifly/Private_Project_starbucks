import React from "react";
import "../css/Header.css";
import "../css/Footer.css";
import "../css/Nav.css";

const MainItem = ({ header, footer, nav, children }) => {
  return (
    <div className="mainContainer">
      <header className="headerContainer">{header}</header>
      <div className="navContainer">{nav}</div>
      <div>{children}</div>
      <footer className="footerContainer">{footer}</footer>
    </div>
  );
};

export default MainItem;
