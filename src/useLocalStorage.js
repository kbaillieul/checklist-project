export const useLocalStorage = (key) => {
  const get = () => {
    const getchecklists = localStorage.getItem(key);
    return getchecklists === null ? [] : JSON.parse(getchecklists);
  };
  const set = (checklist) => {
    const list = get(key);
    const newValue =
      list === null
        ? JSON.stringify(checklist)
        : JSON.stringify([...list, checklist]);
    localStorage.setItem(key, newValue);
    return newValue;
  };
  return [get, set];
};
