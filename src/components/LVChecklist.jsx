import { useState } from "react";
import { sendLVToLocal } from "./local";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "react-datepicker/dist/react-datepicker.css";

const LVChecklist = ({ onSubmit }) => {
  const navigate = useNavigate();
  const defaultLV = {
    key: "",
    date: "",
    idNum: "",
    type: "",
    oil: "",
    coolant: "",
  };
  const [lightVehicle, setLightVehicle] = useState(defaultLV);

  const submitChecklist = (e) => {
    if (
      lightVehicle.date === "" ||
      lightVehicle.idNum === "" ||
      lightVehicle.type === "" ||
      lightVehicle.oil === "" ||
      lightVehicle.coolant === ""
    ) {
      alert("Please complete all questions to submit checklist");
    } else {
      lightVehicle.key = uuidv4();
      sendLVToLocal(lightVehicle);
      onSubmit();
      setLightVehicle(defaultLV);
      navigate("/lightvehicle");
    }
  };
  return (
    <div>
      <label>1. Date of Inspection</label>
      {/* <input
        type="text"
        value={lightVehicle.date}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, date: e.target.value })
        }
      /> */}
      <DatePicker
        selected={lightVehicle.date}
        showTimeSelect
        onChange={(date) => setLightVehicle({ ...lightVehicle, date: date })}
      />
      <br />
      <label>2. Light Vehicle ID Number</label>
      <input
        type="text"
        value={lightVehicle.idNum}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, idNum: e.target.value })
        }
      />
      <br />
      <label>3. Inspection Type</label>
      <input
        type="text"
        value={lightVehicle.type}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, type: e.target.value })
        }
      />
      <div>
        <br />
        <label>4. Oil Level</label>
        <br />
        <input
          onChange={(e) =>
            setLightVehicle({ ...lightVehicle, oil: e.target.value })
          }
          type="radio"
          value="OK"
          //control to keep from multiple radio buttons in the same question being checked
          checked={lightVehicle.oil === "OK"}
        ></input>
        OK <br />
        <input
          onChange={(e) =>
            setLightVehicle({ ...lightVehicle, oil: e.target.value })
          }
          type="radio"
          value="Issue"
          checked={lightVehicle.oil === "Issue"}
        ></input>
        Issue <br />
        <input
          onChange={(e) =>
            setLightVehicle({ ...lightVehicle, oil: e.target.value })
          }
          type="radio"
          value="NA"
          checked={lightVehicle.oil === "NA"}
        ></input>
        N/A
        <br />
        <label>5. Coolant Level</label>
        <br />
        <input
          onChange={(e) =>
            setLightVehicle({ ...lightVehicle, coolant: e.target.value })
          }
          type="radio"
          value="OK"
          //control to keep from multiple radio buttons in the same question being checked
          checked={lightVehicle.coolant === "OK"}
        ></input>
        OK <br />
        <input
          onChange={(e) =>
            setLightVehicle({ ...lightVehicle, coolant: e.target.value })
          }
          type="radio"
          value="Issue"
          checked={lightVehicle.coolant === "Issue"}
        ></input>
        Issue <br />
        <input
          onChange={(e) =>
            setLightVehicle({ ...lightVehicle, coolant: e.target.value })
          }
          type="radio"
          value="NA"
          checked={lightVehicle.coolant === "NA"}
        ></input>
        N/A
        <br />
        <button className="submit" onClick={submitChecklist}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LVChecklist;
