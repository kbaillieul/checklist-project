import React from "react";

const FAChecklist = () => {
  return (
    <div>
      <form className="form">
        <div className="form-control">
          <label>Harness ID Number</label>
          <input type="text"></input>
        </div>
        <div className="form-control">
          <label>Webbing</label>
          <input type="radio" value="OK" name="OK"></input>
          <input type="radio" value="Issue" name="Issue"></input>
          <input type="radio" value="NA" name="NA"></input>
        </div>
      </form>
    </div>
  );
};

export default FAChecklist;
