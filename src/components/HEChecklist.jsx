import React from "react";
import { useState } from "react";

const HEChecklist = () => {
  const [heavyEquip, setHeavyEquip] = useState({
    employeeName: "",
    location: "",
    task: "",
  });
  return (
    <div>
      <label>1. Employee Name</label>
      <input
        type="text"
        value={heavyEquip.employeeName}
        onChange={(e) =>
          setHeavyEquip({ ...heavyEquip, employeeName: e.target.value })
        }
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
        <button className="submit"> Submit</button>
      </div>
    </div>
  );
};

export default HEChecklist;
