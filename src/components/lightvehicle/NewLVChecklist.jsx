import { useState } from "react";
import { addLightVehicleChecklist } from "../../database";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const LVChecklist = ({ onSubmit }) => {
  const navigate = useNavigate();
  const defaultLV = {
    key: "",
    date: "",
    employeeName: "",
    location: "",
    idNum: "",
    fuel: "",
    oil: "",
    coolant: "",
    confirm: false,
  };
  const [lightVehicle, setLightVehicle] = useState(defaultLV);

  const submitChecklist = (e) => {
    if (
      lightVehicle.date === "" ||
      lightVehicle.employeeName === "" ||
      lightVehicle.location === "" ||
      lightVehicle.idNum === "" ||
      lightVehicle.fuel === "" ||
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
    <div className="form-container">
      <div className="date-picker">
        <label className="date-picker-label">1. Date of Inspection</label>
        <DatePicker
          className="text-Input"
          selected={lightVehicle.date}
          showTimeSelect
          onChange={(date) => setLightVehicle({ ...lightVehicle, date: date })}
          maxDate={new Date()}
        />
      </div>
      <label>2. Employee Name</label>
      <input
        className="text-Input"
        type="text"
        value={lightVehicle.employeeName}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, employeeName: e.target.value })
        }
      />
      <br />
      <label>3. Location</label>
      <input
        className="text-Input"
        type="text"
        value={lightVehicle.location}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, location: e.target.value })
        }
      />
      <br />
      <label>4. Light Vehicle ID Number</label>
      <input
        className="text-Input"
        type="text"
        value={lightVehicle.idNum}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, idNum: e.target.value })
        }
      />
      <br />
      <label>5. Fuel Level</label>
      <br />
      <input
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, fuel: e.target.value })
        }
        type="radio"
        value="OK"
        //control to keep from multiple radio buttons in the same question being checked
        checked={lightVehicle.fuel === "OK"}
      ></input>
      OK <br />
      <input
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, fuel: e.target.value })
        }
        type="radio"
        value="Issue"
        checked={lightVehicle.fuel === "Issue"}
      ></input>
      Issue <br />
      <input
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, fuel: e.target.value })
        }
        type="radio"
        value="NA"
        checked={lightVehicle.fuel === "NA"}
      ></input>
      N/A
      <br />
      <label>6. Oil Level</label>
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
      <label>7. Coolant Level</label>
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
      <label>
        8. Vehicle is in good working condition, clean, and ready for use.{" "}
      </label>
      <input
        type="checkbox"
        value={lightVehicle.confirm}
        checked={lightVehicle.confirm}
        onChange={(e) =>
          setLightVehicle({ ...lightVehicle, confirm: e.target.checked })
        }
      />
      <br />
      <Box textAlign="center">
        <Button
          variant="contained"
          className="submit"
          onClick={submitChecklist}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default LVChecklist;
