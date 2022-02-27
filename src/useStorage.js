import { useState } from "react";
function getFallArrestChecklists() {
  const getFA = localStorage.getItem("fallArrest");
  return getFA === null ? [] : JSON.parse(getFA);
}
function getLightVehicleChecklists() {
  const getLV = localStorage.getItem("lightVehicle");
  return getLV === null ? [] : JSON.parse(getLV);
}
function getHeavyEquipmentChecklists() {
  const getHE = localStorage.getItem("heavyEquip");
  return getHE === null ? [] : JSON.parse(getHE);
}
export default function useStorage(type, checklist) {
  const [completed, setCompleted] = useState(() => {
    if (type === "fallArrest") {
      const list = getFallArrestChecklists();
      const newValue =
        list === null
          ? JSON.stringify(checklist)
          : JSON.stringify([...list, checklist]);
      localStorage.setItem("fallArrest", newValue);
      return newValue;
    } else if (type === "lightVehicle") {
      const list = getLightVehicleChecklists();
      const newValue =
        list === null
          ? JSON.stringify(checklist)
          : JSON.stringify([...list, checklist]);
      localStorage.setItem("lightVehicle", newValue);
      return newValue;
    } else if (type === "heavyEquipment") {
      const list = getHeavyEquipmentChecklists();
      const newValue =
        list === null
          ? JSON.stringify(checklist)
          : JSON.stringify([...list, checklist]);
      localStorage.setItem("heavyEquip", newValue);
      return newValue;
    }
  });
  return [completed, setCompleted];
}
