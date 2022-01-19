let stored = [];

export const sendToLocal = (type, checklist) => {
  stored = [localStorage.getItem("fallArrest"), JSON.stringify(checklist)];
  localStorage.setItem(type, stored);
};

export const submittedFA = () => {
  return localStorage.getItem("fallArrest");
};
