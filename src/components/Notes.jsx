import React from "react";
import "./Notes.css";
export default function Notes(props) {
  return (
    // <div className='notecards-main'>
    <div className="shopping-card" style={{ backgroundColor: props.color }}>
      <div className="shopping">
        <p>{props.title}</p>
      </div>
      <div className="goshopping">
        <p>{props.desc}</p>
      </div>
      <div className="timing">
        <p>{props.date}</p>
      </div>
      <div className="note-delete">
        <button onClick={props.openHandler}>Delete</button>
      </div>
    </div>
    // </div>
  );
}
