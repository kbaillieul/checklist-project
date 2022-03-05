import { useState } from "react";

export const useLocalStorage = (key) => {
  const get = () => {
    const getchecklists = localStorage.getItem(key);
    return getchecklists === null ? [] : JSON.parse(getchecklists);
  };
  const set = (checklist) => {
    const list = get();
    const newValue =
      list === null
        ? JSON.stringify(checklist)
        : JSON.stringify([...list, checklist]);
    localStorage.setItem("fallArrest", newValue);
    return newValue;
  };
  return [get, set];
};
