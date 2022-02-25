import { createContext } from "react";
import { useState } from "react";
import {
  getFallArrestChecklists,
  getLightVehicleChecklists,
  getHeavyEquipmentChecklists,
} from "../database";

//context to make completed checklist arrays available to all components
export const CompletedChecklistContext = createContext({});

export const CompletedChecklistProvider = (props) => {
  const [completedFA, setCompletedFA] = useState(getFallArrestChecklists());
  const [completedLV, setCompletedLV] = useState(getLightVehicleChecklists());
  const [completedHE, setCompletedHE] = useState(getHeavyEquipmentChecklists());
  const checklists = {
    fallArrestComplete: {
      value: completedFA,
      update: setCompletedFA,
    },
    lightVehicleComplete: {
      value: completedLV,
      update: setCompletedLV,
    },
    heavyEquipmentComplete: {
      value: completedHE,
      update: setCompletedHE,
    },
  };
  return (
    <CompletedChecklistContext.Provider value={checklists}>
      {props.children}
    </CompletedChecklistContext.Provider>
  );
};
