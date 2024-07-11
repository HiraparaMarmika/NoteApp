import React from "react";
import "./Form.css";
import { useState } from "react";
export default function Form(props) {
  // const [title, setTitle] = useState("");
  // const [discription, setDiscription] = useState("");
  // const [color, setColor] = useState("#E2B1B1");

  const [allData, setAllData] = useState({
    title: "",
    desc: "",
    color: "#E2B1B1",
  });
  const alldataHandler = (event) => {
    const { name, value } = event.target;
    setAllData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(allData);
  };
  //   const [submit,setSubmit]=useState("");
  // const titleHandler = (event) => {
  //   setTitle(event.target.value);
  //   // setAllData({...allData, title: event.target.value})
  // };
  // const discriptionHandler = (event) => {
  //   setDiscription(event.target.value);
  // };
  // const colorHandler = (event) => {
  //   setColor(event.target.value);
  // };
  const submitHandler = (event) => {
    event.preventDefault();
    if (allData.title === "" || allData.desc === "") {
      return;
    }
    props.formDataHandler(allData);
    // setAllData("");
    // setAllData("");
    // setColor("#E2B1B1");
    setAllData({
      title: "",
      desc: "",
      color: "#E2B1B1",
    });
  };
  return (
    <div>
      <div className="notes">
        <h1 className="create-note">Create Note</h1>
        <form action="" className="note-info" onSubmit={submitHandler}>
          <div>
            <label htmlFor="Note Title">Note Title</label>
            <input
              type="text"
              placeholder="Enter title..."
              className="note-title"
              value={allData.title}
              name="title"
              onChange={alldataHandler}
            />
          </div>
          <div className="discription">
            <label htmlFor="discription">Note Title</label>
          </div>
          <div>
            <textarea
              placeholder="Enter title..."
              rows="5"
              className="note-discription"
              value={allData.desc}
              name="desc"
              onChange={alldataHandler}
            ></textarea>
          </div>
          <div className="color">
            <label htmlFor="Notes color">Notes color</label>
          </div>
          <div className="note-color">
            <input
              type="color"
              name="color"
              onChange={alldataHandler}
              value={allData.color}
            />
          </div>
          <div className="note-button">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
