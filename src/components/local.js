//function to send completed FA checklist to local storage
export const sendFAToLocal = (checklist) => {
  const list = getFAFromLocal();
  const newValue =
    list === null
      ? JSON.stringify(checklist)
      : JSON.stringify([...list, checklist]);
  localStorage.setItem("fallArrest", newValue);
};

//function to get checklist object stored in local storage under fallArrest key
export const getFAFromLocal = () => {
  const getFA = localStorage.getItem("fallArrest");
  return getFA === null ? [] : JSON.parse(getFA);
};

//function to send completed LV checklist to local storage
export const sendLVToLocal = (checklist) => {
  const list = getLVFromLocal();
  const newValue =
    list === null
      ? JSON.stringify(checklist)
      : JSON.stringify([...list, checklist]);
  localStorage.setItem("lightVehicle", newValue);
};

//function to get checklist object stored in local storage under lightVehicle key
export const getLVFromLocal = () => {
  const getLV = localStorage.getItem("lightVehicle");
  return getLV === null ? [] : JSON.parse(getLV);
};

//function to send completed HE checklist to local storage
export const sendHEToLocal = (checklist) => {
  const list = getHEFromLocal();
  const newValue =
    list === null
      ? JSON.stringify(checklist)
      : JSON.stringify([...list, checklist]);
  localStorage.setItem("heavyEquip", newValue);
};

//function to get checklist object stored in local storage under heavyEquip key
export const getHEFromLocal = () => {
  const getHE = localStorage.getItem("heavyEquip");
  return getHE === null ? [] : JSON.parse(getHE);
};
