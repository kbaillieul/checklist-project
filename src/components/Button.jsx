import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div>
      {/* on button click event, addFA function begins which changes showFA state in app.js. When showFA is true, Fall Arrest checklist is visible. */}
      <button className="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
