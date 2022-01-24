import { useState } from "react";
import { sendHEToLocal } from "./local";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const HEChecklist = ({ onSubmit }) => {
  const defaultHE = {
    date: "",
    location: "",
    task: "",
    alarm: "",
    hydraulics: "",
  };
  const [heavyEquip, setHeavyEquip] = useState(defaultHE);

  const submitChecklist = (e) => {
    if (
      heavyEquip.date === "" ||
      heavyEquip.location === "" ||
      heavyEquip.task === "" ||
      heavyEquip.alarm === "" ||
      heavyEquip.hydraulics === ""
    ) {
      alert("Please answer all questions to submit checklist");
    } else {
      //sendToLocal function in local.js stores checklist data into local storage
      sendHEToLocal(heavyEquip);
      onSubmit();
      setHeavyEquip(defaultHE);
    }
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
        <label>4. Backup Alarm</label>
        <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, alarm: e.target.value })
          }
          type="radio"
          value="OK"
          name="alarmOK"
          //control to keep from multiple radio buttons in the same question being checked
          checked={heavyEquip.alarm === "OK"}
        ></input>
        OK <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, alarm: e.target.value })
          }
          type="radio"
          value="Issue"
          name="alarmIssue"
          checked={heavyEquip.alarm === "Issue"}
        ></input>
        Issue <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, alarm: e.target.value })
          }
          type="radio"
          value="NA"
          name="alarmNA"
          checked={heavyEquip.alarm === "NA"}
        ></input>
        N/A
        <br />
        <label>5. Hydraulics</label>
        <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, hydraulics: e.target.value })
          }
          type="radio"
          value="OK"
          name="hydraulicsOK"
          //control to keep from multiple radio buttons in the same question being checked
          checked={heavyEquip.hydraulics === "OK"}
        ></input>
        OK <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, hydraulics: e.target.value })
          }
          type="radio"
          value="Issue"
          name="hydraulicsIssue"
          checked={heavyEquip.hydraulics === "Issue"}
        ></input>
        Issue <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, hydraulics: e.target.value })
          }
          type="radio"
          value="NA"
          name="hydraulicsNA"
          checked={heavyEquip.hydraulics === "NA"}
        ></input>
        N/A
        <br />
        <button className="submit" onClick={submitChecklist}>
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
};

export default HEChecklist;
