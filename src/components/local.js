export const sendToLocal = (type, checklist) => {
  localStorage.setItem(type, checklist);
};
