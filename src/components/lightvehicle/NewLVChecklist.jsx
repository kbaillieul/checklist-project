import { useState } from "react";
import { addLightVehicleChecklist } from "../../database";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@mui/material/Button";

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
      addLightVehicleChecklist(lightVehicle);
      onSubmit();
      setLightVehicle(defaultLV);
      navigate("/light-vehicle/completed");
    }
  };
  return (
    <div>
      <label>1. Date of Inspection</label>
      <DatePicker
        className="text-Input"
        selected={lightVehicle.date}
        showTimeSelect
        onChange={(date) => setLightVehicle({ ...lightVehicle, date: date })}
        maxDate={new Date()}
      />
      <br />
      <label>2. Light Vehicle ID Number</label>
      <input
        className="text-Input"
        type="text"
        value={lightVehicle.idNum}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, idNum: e.target.value })
        }
      />
      <br />
      <label>3. Inspection Type</label>
      <input
        className="text-Input"
        type="text"
        value={lightVehicle.type}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, type: e.target.value })
        }
      />
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
      <Button variant="contained" className="submit" onClick={submitChecklist}>
        Submit
      </Button>
    </div>
  );
};

export default LVChecklist;
