import React from "react";
import { useState } from "react";

const FAChecklist = () => {
  const [hNum, setHNum] = useState("");
  const [web, setWeb] = useState("");
  return (
    <div>
      <form className="form">
        <div className="form-control">
          <label>Harness ID Number</label>
          <input
            type="text"
            value={hNum}
            onChange={(e) => setHNum(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>Webbing </label>
          OK{" "}
          <input
            onChange={(e) => setWeb(e.target.value)}
            type="radio"
            value="OK"
            name="OK"
            checked={web === "OK"}
          ></input>
          Issue{" "}
          <input
            onChange={(e) => setWeb(e.target.value)}
            type="radio"
            value="Issue"
            name="Issue"
            checked={web === "Issue"}
          ></input>
          N/A{" "}
          <input
            onChange={(e) => setWeb(e.target.value)}
            type="radio"
            value="NA"
            name="NA"
            checked={web === "NA"}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default FAChecklist;
