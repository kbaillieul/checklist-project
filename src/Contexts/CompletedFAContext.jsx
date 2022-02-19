import react from "react";
import { createContext } from "react";
import { useState } from "react";
import { getFallArrestChecklists } from "../database";

export const CompletedFAContext = createContext({});

export const CompletedFAProvider = (props) => {
  const [completedFA, setCompletedFA] = useState(getFallArrestChecklists());
  return (
    <CompletedFAContext.Provider value={[completedFA, setCompletedFA]}>
      {props.children}
    </CompletedFAContext.Provider>
  );
};
