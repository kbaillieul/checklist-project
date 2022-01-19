let stored = [];
let returned = [];

export const sendToLocal = (type, checklist) => {
  if (stored.length === 0) {
    stored = checklist;
    localStorage.setItem(type, stored);
  } else {
    stored = [localStorage.getItem(type), checklist];
    localStorage.setItem(type, stored);
  }
};

export const submittedFA = (showChecklist) => {
  returned = [localStorage.getItem("fallArrest")];
  return returned;
};

// export const submittedFA = (showChecklist) => {
//   if (showChecklist === 1) {
//     returned = [...returned, localStorage.getItem("fallArrest")];
//     return returned;
//   } else if (showChecklist === 2) {
//     returned = [...returned, localStorage.getItem("lightVehicle")];
//     return returned;
//   } else {
//     returned = [...returned, localStorage.getItem("heavyEquip")];
//     return returned;
//   }
// };
