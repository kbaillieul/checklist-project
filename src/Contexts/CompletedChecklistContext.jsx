import { createContext } from "react";
import { useState } from "react";
import {
  getFallArrestChecklists,
  getLightVehicleChecklists,
  getHeavyEquipmentChecklists,
} from "../database";
import { useLocalStorage } from "../useLocalStorage";

//context to make completed checklist arrays available to all components
export const CompletedChecklistContext = createContext({});

export const CompletedChecklistProvider = (props) => {
  const [completedFA, setCompletedFA] = useLocalStorage("fallArrest");
  const [completedLV, setCompletedLV] = useLocalStorage("lightVehicle");
  const [completedHE, setCompletedHE] = useLocalStorage("heavyEquip");

  const checklists = {
    fallArrestComplete: {
      value: completedFA("fallArrest"),
      update: setCompletedFA,
    },
    lightVehicleComplete: {
      value: completedLV("lightVehicle"),
      update: setCompletedLV,
    },
    heavyEquipmentComplete: {
      value: completedHE("heavyEquip"),
      update: setCompletedHE,
    },
  };
  return (
    <CompletedChecklistContext.Provider value={checklists}>
      {props.children}
    </CompletedChecklistContext.Provider>
  );
};
