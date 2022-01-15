import React from "react";
import { useState } from "react";
import { sendToLocal } from "./local";

const HEChecklist = ({ onSubmit }) => {
  const [heavyEquip, setHeavyEquip] = useState({
    date: "",
    location: "",
    task: "",
  });
  const [submittedHE, setSubmittedHE] = useState([]);
  const submitChecklist = (e) => {
    // const newChecklist = JSON.stringify(heavyEquip);
    // onSubmit(newChecklist);
    // const submitted = [...submittedHE, newChecklist];
    // setSubmittedHE(submitted);
    // sendToLocal("heavy equipment", submitted);
    setHeavyEquip({
      date: "",
      location: "",
      task: "",
    });
  };
  return (
    <div>
      <label>1. Date</label>
      <input
        type="text"
        value={heavyEquip.date}
        onChange={(e) => setHeavyEquip({ ...heavyEquip, date: e.target.value })}
      />
      <br />
      <label>2. Location</label>
      <input
        type="text"
        value={heavyEquip.location}
        onChange={(e) =>
          setHeavyEquip({ ...heavyEquip, location: e.target.value })
        }
      />
      <br />
      <label>3. Task Description</label>
      <input
        type="text"
        value={heavyEquip.task}
        onChange={(e) => setHeavyEquip({ ...heavyEquip, task: e.target.value })}
      />
      <div>
        <button className="submit" onClick={submitChecklist}>
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
};

export default HEChecklist;
