export const sendFAToLocal = (checklist) => {
  const list = getFAFromLocal();
  const newValue =
    list === null
      ? JSON.stringify(checklist)
      : JSON.stringify([...list, checklist]);
  localStorage.setItem("fallArrest", newValue);
};
export const getFAFromLocal = () => {
  const getFA = localStorage.getItem("fallArrest");
  return getFA === null ? [] : JSON.parse(getFA);
};

export const sendLVToLocal = (checklist) => {
  const list = getLVFromLocal();
  const newValue =
    list === null
      ? JSON.stringify(checklist)
      : JSON.stringify([...list, checklist]);
  localStorage.setItem("lightVehicle", newValue);
};
export const getLVFromLocal = () => {
  const getLV = localStorage.getItem("lightVehicle");
  return getLV === null ? [] : JSON.parse(getLV);
};

export const sendHEToLocal = (checklist) => {
  const list = getHEFromLocal();
  const newValue =
    list === null
      ? JSON.stringify(checklist)
      : JSON.stringify([...list, checklist]);
  localStorage.setItem("heavyEquip", newValue);
};
export const getHEFromLocal = () => {
  const getHE = localStorage.getItem("heavyEquip");
  return getHE === null ? [] : JSON.parse(getHE);
};
