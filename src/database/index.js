//function to send completed FA checklist to local storage
export const addFallArrestChecklist = (checklist) => {
  const list = getFallArrestChecklists();
  const newValue =
    list === null
      ? JSON.stringify(checklist)
      : JSON.stringify([...list, checklist]);
  localStorage.setItem("fallArrest", newValue);
};

//function to get checklist object stored in local storage under fallArrest key
export const getFallArrestChecklists = () => {
  const getFA = localStorage.getItem("fallArrest");
  return getFA === null ? [] : JSON.parse(getFA);
};

//function to send completed LV checklist to local storage
export const addLightVehicleChecklist = (checklist) => {
  const list = getLightVehicleChecklists();
  const newValue =
    list === null
      ? JSON.stringify(checklist)
      : JSON.stringify([...list, checklist]);
  localStorage.setItem("lightVehicle", newValue);
};

//function to get checklist object stored in local storage under lightVehicle key
export const getLightVehicleChecklists = () => {
  const getLV = localStorage.getItem("lightVehicle");
  return getLV === null ? [] : JSON.parse(getLV);
};

//function to send completed HE checklist to local storage
export const addHeavyEquipmentChecklist = (checklist) => {
  const list = getHeavyEquipmentChecklists();
  const newValue =
    list === null
      ? JSON.stringify(checklist)
      : JSON.stringify([...list, checklist]);
  localStorage.setItem("heavyEquip", newValue);
};

//function to get checklist object stored in local storage under heavyEquip key
export const getHeavyEquipmentChecklists = () => {
  const getHE = localStorage.getItem("heavyEquip");
  return getHE === null ? [] : JSON.parse(getHE);
};
