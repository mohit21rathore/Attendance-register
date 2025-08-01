import React from "react";
import { useState } from "react";
import "./Input_Subject.css";
import { GiSaveArrow } from "react-icons/gi";

const Input_Subject = ({ prop }) => {
  const [SubjectName, setSubjectName] = useState("");

  const giveData = () => {
    prop(SubjectName);
    setSubjectName("");
  };

  return (
    <>
      <div className="add-subject">
        <input
          type="text"
          className="add-subject-name"
          placeholder="Subject Name"
          value={SubjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <button className="button disabled:cursor-not-allowed disabled:opacity-50" onClick={giveData} disabled={SubjectName === ""}>
          <GiSaveArrow />
        </button>
      </div>
    </>
  );
};

export default Input_Subject;
