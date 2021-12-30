import React from "react";
import { useState } from "react";

const FAChecklist = () => {
  const [hNum, setHNum] = useState("");
  const [web, setWeb] = useState("");
  const [dRing, setDRing] = useState("");
  const [buckles, setBuckles] = useState("");
  return (
    <div>
      <form className="form">
        <div className="form-control">
          <label>1. Harness ID Number{"  "}</label>
          <input
            type="text"
            value={hNum}
            onChange={(e) => setHNum(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>
            2. Webbing - Check for frayed edges, broken fibers, pulled stitches,
            cuts, burns, and chemical damage.
          </label>
          <div></div>
          OK{" "}
          <input
            onChange={(e) => setWeb(e.target.value)}
            type="radio"
            value="OK"
            name="OK"
            checked={web === "OK"}
          ></input>
          <div></div>
          Issue{" "}
          <input
            onChange={(e) => setWeb(e.target.value)}
            type="radio"
            value="Issue"
            name="Issue"
            checked={web === "Issue"}
          ></input>
          <div></div>
          N/A{" "}
          <input
            onChange={(e) => setWeb(e.target.value)}
            type="radio"
            value="NA"
            name="NA"
            checked={web === "NA"}
          ></input>
        </div>
        <div className="form-control">
          <label>
            3. "D" Ring/Back Pads - Check “D” rings for distortion, cracks,
            breaks, and rough or sharp edges. The “D” ring should pivot freely.
            “D” ring back pads should also be inspected for damage.{" "}
          </label>
          <div></div>
          OK{" "}
          <input
            onChange={(e) => setDRing(e.target.value)}
            type="radio"
            value="OK"
            name="OK"
            checked={dRing === "OK"}
          ></input>
          <div></div>
          Issue{" "}
          <input
            onChange={(e) => setDRing(e.target.value)}
            type="radio"
            value="Issue"
            name="Issue"
            checked={dRing === "Issue"}
          ></input>
          <div></div>
          N/A{" "}
          <input
            onChange={(e) => setDRing(e.target.value)}
            type="radio"
            value="NA"
            name="NA"
            checked={dRing === "NA"}
          ></input>
          <div></div>
        </div>
        <div className="form-control">
          <label>
            4. Attachment of Buckles - Note any unusual wear, frayed or cut
            fiber, or distortion of the buckles
          </label>
          <div></div>
          OK{" "}
          <input
            onChange={(e) => setBuckles(e.target.value)}
            type="radio"
            value="OK"
            name="OK"
            checked={buckles === "OK"}
          ></input>
          <div></div>
          Issue{" "}
          <input
            onChange={(e) => setBuckles(e.target.value)}
            type="radio"
            value="Issue"
            name="Issue"
            checked={buckles === "Issue"}
          ></input>
          <div></div>
          N/A{" "}
          <input
            onChange={(e) => setBuckles(e.target.value)}
            type="radio"
            value="NA"
            name="NA"
            checked={buckles === "NA"}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default FAChecklist;
