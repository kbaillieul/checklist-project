import { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "react-datepicker/dist/react-datepicker.css";
import {
  addHeavyEquipmentChecklist,
  Button,
  Box,
  CompletedChecklistContext,
  getHeavyEquipmentChecklists,
} from "./index";

const HEChecklist = () => {
  const { heavyEquipmentComplete } = useContext(CompletedChecklistContext);
  const navigate = useNavigate();
  const defaultHE = {
    key: "",
    date: "",
    employeeName: "",
    location: "",
    idNum: "",
    hazard: "",
    fluid: "",
    alarm: "",
    hydraulics: "",
  };
  const [heavyEquip, setHeavyEquip] = useState(defaultHE);

  const submitChecklist = (e) => {
    if (
      heavyEquip.date === "" ||
      heavyEquip.employeeName === "" ||
      heavyEquip.location === "" ||
      heavyEquip.idNum === "" ||
      heavyEquip.hazard === "" ||
      heavyEquip.fluid === "" ||
      heavyEquip.alarm === "" ||
      heavyEquip.hydraulics === ""
    ) {
      alert("Please answer all questions to submit checklist");
    } else {
      heavyEquip.key = uuidv4();
      addHeavyEquipmentChecklist(heavyEquip);
      heavyEquipmentComplete.update(getHeavyEquipmentChecklists);
      setHeavyEquip(defaultHE);
      navigate("/heavy-equipment/completed");
    }
  };
  return (
    <div className="form-container">
      <div className="date-picker">
        <label className="date-picker-label">1. Date of Inspection</label>
        <DatePicker
          className="text-Input"
          selected={heavyEquip.date}
          showTimeSelect
          onChange={(date) => setHeavyEquip({ ...heavyEquip, date: date })}
          maxDate={new Date()}
        />
      </div>
      <label>2. Employee Name</label>
      <input
        className="text-Input"
        type="text"
        value={heavyEquip.employeeName}
        onChange={(e) =>
          setHeavyEquip({ ...heavyEquip, employeeName: e.target.value })
        }
      />
      <br />
      <label>3. Location</label>
      <input
        className="text-Input"
        type="text"
        value={heavyEquip.location}
        onChange={(e) =>
          setHeavyEquip({ ...heavyEquip, location: e.target.value })
        }
      />
      <div>
        <label>4. Equipment ID Number</label>
        <input
          className="text-Input"
          type="text"
          value={heavyEquip.idNum}
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, idNum: e.target.value })
          }
        />
        <br />
        <label>
          5. Nearby Hazards - Check for safety and environmental hazards around
          equipment and work site
        </label>
        <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, hazard: e.target.value })
          }
          type="radio"
          value="OK"
          checked={heavyEquip.hazard === "OK"}
        ></input>
        OK <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, hazard: e.target.value })
          }
          type="radio"
          value="Issue"
          checked={heavyEquip.hazard === "Issue"}
        ></input>
        Issue <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, hazard: e.target.value })
          }
          type="radio"
          value="NA"
          checked={heavyEquip.hazard === "NA"}
        ></input>
        N/A
        <br />
        <label>
          6. Fluid Levels and Leaks - Check levels and potential leaks of engine
          oil, fuel, hydralic and radiator fluid.{" "}
        </label>
        <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, fluid: e.target.value })
          }
          type="radio"
          value="OK"
          checked={heavyEquip.fluid === "OK"}
        ></input>
        OK <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, fluid: e.target.value })
          }
          type="radio"
          value="Issue"
          checked={heavyEquip.fluid === "Issue"}
        ></input>
        Issue <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, fluid: e.target.value })
          }
          type="radio"
          value="NA"
          checked={heavyEquip.fluid === "NA"}
        ></input>
        N/A
        <br />
        <label>
          7. Backup Alarm - Check backup alarm is working and loud enough to be
          heard in an operational environment.
        </label>
        <br />
        <input
          onChange={(e) =>
            setHeavyEquip({ ...heavyEquip, alarm: e.target.value })
          }
          type="radio"
          value="OK"
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
        <label>
          8. Hydraulics - Check for cylinders, hoses, and valves free from leaks
          and damage.{" "}
        </label>
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
    </div>
  );
};

export default HEChecklist;
