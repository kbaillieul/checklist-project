import { createContext } from "react";
import { useState } from "react";
import {
  getFallArrestChecklists,
  getLightVehicleChecklists,
  getHeavyEquipmentChecklists,
} from "../database";
import { useStorage } from "../useStorage";

//context to make completed checklist arrays available to all components
export const CompletedChecklistContext = createContext({});

export const CompletedChecklistProvider = (props) => {
  const [completedFA, setCompletedFA] = useStorage("fallArrest", "");
  const [completedLV, setCompletedLV] = useStorage("lightVehicle", "");
  const [completedHE, setCompletedHE] = useStorage("heavyEquipment", "");
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
