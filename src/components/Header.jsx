import React from "react";
import Button from "./Button";

const Header = ({ addFA }) => {
  return (
    <header>
      <h1>HSE Checklists</h1>
      <div>
        <Button text="Fall Arrest Checklist" onClick={addFA} />
        <Button text="Light Vehicle Checklist" />
        <Button text="Heavy Equipment Checklist" />
      </div>
    </header>
  );
};

export default Header;
