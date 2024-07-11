import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Notes from "./components/Notes";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import Model from "./components/Model";

const getdata = () => {
  const notes = JSON.parse(localStorage.getItem("notedata"));
  if (notes) {
    return notes;
  } else {
    return [];
  }
};
function App() {
  const [formData, setFormData] = useState(getdata);
  // JSON.parse(localStorage.getItem("notedata")) || [];
  const [mode, setMode] = useState("light");
  const [openModel, setOpenModel] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  const formDataHandler = (allData) => {
    setFormData((prev) => {
      return [
        ...prev,
        {
          title: allData.title,
          desc: allData.description,
          color: allData.color,
          date: new Date().toString(),
          id: uuid(),
        },
      ];
    });
    localStorage.setItem("notedata", JSON.stringify(formData));
  };
  useEffect(() => {
    localStorage.setItem("notedata", JSON.stringify(formData));
  }, [formData]);
  // console.log(formData[0]?.id);
  const deleteHandler = (id) => {
    console.log(id);
    const deleteData = formData.filter((item) => id !== item.id);
    console.log(deleteData);
    setFormData(deleteData);
    setOpenModel(false);
  };
  const openHandler = (id) => {
    setDeleteId(id);
    setOpenModel(true);
  };
  const cancle = () => {
    setOpenModel(false);
  };
  return (
    <>
      {openModel && (
        <Model cancle={cancle} deleteHandler={() => deleteHandler(deleteId)} />
      )}

      <Navbar mode={mode} toggleMode={toggleMode} />
      <Form
        formDataHandler={formDataHandler}
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className={`${mode === "light" ? "note-light" : "note-dark"}`}>
        <div className="note-shopping">
          <h1>Notes</h1>
        </div>

        <div className="list-notes">
          {formData.length > 0 ? (
            formData.map((item) => (
              <Notes
                key={item.id}
                title={item.title}
                desc={item.desc}
                color={item.color}
                date={item.date}
                // deleteHandler={() => deleteHandler(item.id)}
                openHandler={() => openHandler(item.id)}
              />
            ))
          ) : (
            <h3>No Note Created</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
