export const sendFAToLocal = (checklist) => {
  const list = getFAFromLocal();
  const newValue =
    list === null
      ? [JSON.stringify(checklist)]
      : [...list, JSON.stringify(checklist)];
  localStorage.setItem("fallArrest", newValue);
};
export const getFAFromLocal = () => {
  const getFA = localStorage.getItem("fallArrest");
  return getFA === null ? [] : JSON.parse(getFA);
};
