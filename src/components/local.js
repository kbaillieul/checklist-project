let stored = [];
let returned = [];

export const sendToLocal = (type, checklist) => {
  if (stored.length === 0) {
    stored = checklist;
    localStorage.setItem(type, stored);
  } else {
    stored = [localStorage.getItem("fallArrest"), checklist];
    localStorage.setItem(type, stored);
  }
};

export const submittedFA = () => {
  returned = [localStorage.getItem("fallArrest")];
  return returned;
};
