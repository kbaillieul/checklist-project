import { useState } from "react";
import { sendHEToLocal } from "./local";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
      <label>1. Date of Inspection</label>
      {/* <input
        type="text"
        value={heavyEquip.date}
        onChange={(e) => setHeavyEquip({ ...heavyEquip, date: e.target.value })}
      /> */}
      <DatePicker
        selected={heavyEquip.date}
        onChange={(date) => setHeavyEquip({ ...heavyEquip, date: date })}
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
