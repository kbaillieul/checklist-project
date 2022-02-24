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
  const checklists = {
    fallArrest: getFallArrestChecklists(),
    lightVehicle: getLightVehicleChecklists(),
    heavyEquipment: getHeavyEquipmentChecklists(),
  };
  return (
    <CompletedChecklistContext.Provider value={checklists}>
      {props.children}
    </CompletedChecklistContext.Provider>
  );
};
