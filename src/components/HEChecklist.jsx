import React from "react";
import { useState } from "react";
import { sendHEToLocal } from "./local";

const HEChecklist = ({ onSubmit }) => {
  const defaultHE = {
    date: "",
    location: "",
    task: "",
  };
  const [heavyEquip, setHeavyEquip] = useState(defaultHE);

  const submitChecklist = (e) => {
    //sendToLocal function in local.js stores checklist data into local storage
    sendHEToLocal(heavyEquip);
    onSubmit();
    setHeavyEquip(defaultHE);
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
