import React from "react";
import { createPortal } from "react-dom";
import "./Model.css";
export default function Model({ cancle, deleteHandler }) {
  return (
    <>
      {createPortal(
        <>
          <div className="alertback" onClick={cancle}></div>
          <div className="messagebox">
            <p>Are you sure delete this note!</p>
            <div className="btn">
              <div className="delete">
                <button onClick={deleteHandler}>Delete</button>
              </div>
              <div className="cancle">
                <button onClick={cancle}>Cancle</button>
              </div>
            </div>
          </div>
        </>,
        document.getElementById("model")
      )}
    </>
  );
}
