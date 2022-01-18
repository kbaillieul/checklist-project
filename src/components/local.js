export const sendToLocal = (type, checklist) => {
  localStorage.setItem(type, checklist);
};

export const submittedFA = () => {
  localStorage.getItem("fallArrest");
};
