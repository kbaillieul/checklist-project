export const sendToLocal = (type, checklist) => {
  localStorage.setItem(type, checklist);
};

export const submittedFA = () => {
  const completeFA = localStorage.getItem("fallArrest");
};
