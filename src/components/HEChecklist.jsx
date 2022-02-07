import { useState } from "react";
import { sendHEToLocal } from "./local";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@mui/material/Button";

const HEChecklist = ({ onSubmit }) => {
  const navigate = useNavigate();
  const defaultHE = {
    key: "",
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
      heavyEquip.key = uuidv4();
      sendHEToLocal(heavyEquip);
      onSubmit();
      setHeavyEquip(defaultHE);
      navigate("/heavyequipment/completed");
    }
  };
  return (
    <div>
      <label>1. Date of Inspection</label>
      <DatePicker
        className="text-Input"
        selected={heavyEquip.date}
        showTimeSelect
        onChange={(date) => setHeavyEquip({ ...heavyEquip, date: date })}
        maxDate={new Date()}
      />
      <br />
      <label>2. Location</label>
      <input
        className="text-Input"
        type="text"
        value={heavyEquip.location}
        onChange={(e) =>
          setHeavyEquip({ ...heavyEquip, location: e.target.value })
        }
      />
      <br />
      <label>3. Task Description</label>
      <input
        className="text-Input"
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
          checked={heavyEquip.alarm === "Issue"}
        ></input>
        Issue <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, alarm: e.target.value })
          }
          type="radio"
          value="NA"
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
          checked={heavyEquip.hydraulics === "OK"}
        ></input>
        OK <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, hydraulics: e.target.value })
          }
          type="radio"
          value="Issue"
          checked={heavyEquip.hydraulics === "Issue"}
        ></input>
        Issue <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, hydraulics: e.target.value })
          }
          type="radio"
          value="NA"
          checked={heavyEquip.hydraulics === "NA"}
        ></input>
        N/A
        <br />
        <Button
          variant="contained"
          className="submit"
          onClick={submitChecklist}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default HEChecklist;
