import React from "react";
import { useState, useEffect } from "react";
import Input_Subject from "../Input Subject/Input_Subject.jsx";
import { v4 as uuid } from "uuid";
import "./App.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";

const App = () => {
  const [Subject, setSubject] = useState([]);
  const [Attendence, setAttendence] = useState([]);
  const [Show, setShow] = useState(false);

  useEffect(() => {
    let subject = localStorage.getItem("subject");
    if (subject) {
      setSubject(JSON.parse(subject));
    }
    let attendence = localStorage.getItem("attendence");
    if (attendence) {
      setAttendence(JSON.parse(attendence));
    }
  }, []);

  const saveToLocalStorage = () => {
    localStorage.setItem("subject", JSON.stringify(Subject));
    localStorage.setItem("attendence", JSON.stringify(Attendence));
  };

  const getSubject = (subject) => {
    setSubject([...Subject, subject]);
    setAttendence([...Attendence, 0]);
    handleInput();
    saveToLocalStorage();
  };

  const handleInput = () => {
    setShow(!Show);
  };

  return (
    <>
      <div className="main-container hover:cursor-default">
        <h1 className="heading">Attendence Register</h1>
        <div className="subjects bg-[#E3FEF7] my-6 rounded-3xl py-6">
          <div className="header  flex justify-between items-center px-6">
            <div className="names sm:text-2xl sm:font-bold">
              Subjects Names and Attendence
            </div>
            <div
              className="edit h-4 w-4 hover:cursor-pointer"
              onClick={handleInput}
            >
              <MdEditSquare />
            </div>
          </div>

          {Show ? (
            <Input_Subject prop={getSubject} />
          ) : (
            Subject.length !== 0 && (
              <div className="register sm:grid sm:grid-cols-3">
                {Subject.map((items) => (
                  <div className="subject" key={uuid()}>
                    <div className="subject-name">{items}</div>
                    <div className="attendece-box flex justify-around items-center gap-6">
                      <button
                        className="hover:cursor-pointer decrement"
                        onClick={() => {
                          let newAttendence = [...Attendence];
                          newAttendence[Subject.indexOf(items)] -= 1;
                          setAttendence([...newAttendence]);
                          saveToLocalStorage();
                        }}
                      >
                        <FaMinus className="hover:cursor-pointer" />
                      </button>
                      <div className="attendence">
                        {Attendence[Subject.indexOf(items)]}
                      </div>
                      <button
                        className="hover:cursor-pointer increment"
                        onClick={() => {
                          let newAttendence = [...Attendence];
                          newAttendence[Subject.indexOf(items)] += 1;
                          setAttendence([...newAttendence]);
                          saveToLocalStorage();
                        }}
                      >
                        <FaPlus className="hover:cursor-pointer" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default App;
