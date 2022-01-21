export const sendFAToLocal = (checklist) => {
  const list = getFAFromLocal();
  console.log(list);
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
