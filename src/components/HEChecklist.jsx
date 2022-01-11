import React from "react";
import { useState } from "react";

const HEChecklist = ({ onSubmit }) => {
  const [heavyEquip, setHeavyEquip] = useState({
    date: "",
    location: "",
    task: "",
  });
  const submitChecklist = (e) => {
    const newChecklist = JSON.stringify(heavyEquip);
    onSubmit(newChecklist);
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
      <div></div>
      <label>2. Location</label>
      <input
        type="text"
        value={heavyEquip.location}
        onChange={(e) =>
          setHeavyEquip({ ...heavyEquip, location: e.target.value })
        }
      />
      <div></div>
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
