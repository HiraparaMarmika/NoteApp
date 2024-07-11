// import React, { useState } from "react";
import "./Navbar.css";
import { BsMoonStarsFill } from "react-icons/bs";

export default function Navbar({ mode, toggleMode }) {
  return (
    <div>
      <div
        className={`${mode === "light" ? "container" : "container-dark"}`}
        id="icons"
      >
        <div className="logo">
          <h1>Notes</h1>
        </div>
        <div
          className="icon"
          style={{ color: `${mode === "light" ? "black" : "white"}` }}
          onClick={toggleMode}
        >
          <BsMoonStarsFill />
        </div>
      </div>
    </div>
  );
}
