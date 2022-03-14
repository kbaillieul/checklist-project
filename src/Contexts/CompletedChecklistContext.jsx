import { createContext } from "react";
import { useLocalStorage } from "../useLocalStorage";

//context to make completed checklist arrays available to all components
export const CompletedChecklistContext = createContext({});

export const CompletedChecklistProvider = (props) => {
  const [completedFA, setCompletedFA] = useLocalStorage();
  const [completedLV, setCompletedLV] = useLocalStorage();
  const [completedHE, setCompletedHE] = useLocalStorage();

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
