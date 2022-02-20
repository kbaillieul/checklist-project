import react from "react";
import { createContext } from "react";
import { useState } from "react";
import {
  getFallArrestChecklists,
  getLightVehicleChecklists,
  getHeavyEquipmentChecklists,
} from "../database";

export const CompletedChecklistContext = createContext({});

export const CompletedChecklistProvider = (props) => {
  const [completedFA, setCompletedFA] = useState(getFallArrestChecklists());
  const [completedLV, setCompletedLV] = useState(getLightVehicleChecklists());
  const [completedHE, setCompletedHE] = useState(getHeavyEquipmentChecklists());
  return (
    <CompletedChecklistContext.Provider
      value={[
        completedFA,
        setCompletedFA,
        completedLV,
        setCompletedLV,
        completedHE,
        setCompletedHE,
      ]}
    >
      {props.children}
    </CompletedChecklistContext.Provider>
  );
};
