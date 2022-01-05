import React from "react";
import { useState } from "react";

const FAChecklist = () => {
  // States to hold value of each checklist question
  const [plan, setPlan] = useState(false);
  const [alone, setAlone] = useState(false);
  const [hNum, setHNum] = useState("");
  const [web, setWeb] = useState("");
  const [dRing, setDRing] = useState("");
  const [buckles, setBuckles] = useState("");
  return (
    <div>
      <form className="form">
        <div className="form-control">
          <input
            type="checkbox"
            value={plan}
            checked={plan}
            //when value typed in, hNum state updated to value typed
            onChange={(e) => setPlan(e.target.checked)}
          ></input>
          <label>
            There is an applicable and realistic rescue plan in place for this
            work{"  "}
          </label>
        </div>
        <div className="form-control">
          <input
            type="checkbox"
            value={alone}
            checked={alone}
            //when value typed in, hNum state updated to value typed
            onChange={(e) => setAlone(e.target.checked)}
          ></input>
          <label>
            I am not working alone. Working alone is never permitted in a
            scenario requiring fall arrest.
          </label>
        </div>
        <div className="form-control">
          <label>1. Harness ID Number{"  "}</label>
          <input
            type="text"
            value={hNum}
            //when value typed in, hNum state updated to value typed
            onChange={(e) => setHNum(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>
            2. Webbing - Check for frayed edges, broken fibers, pulled stitches,
            cuts, burns, and chemical damage.
          </label>
          <div></div>
          <input
            onChange={(e) => setWeb(e.target.value)}
            type="radio"
            value="OK"
            name="OK"
            //control to keep from multiple radio buttons in the same question being checked
            checked={web === "OK"}
          ></input>
          OK <div></div>
          <input
            onChange={(e) => setWeb(e.target.value)}
            type="radio"
            value="Issue"
            name="Issue"
            checked={web === "Issue"}
          ></input>
          Issue <div></div>
          <input
            onChange={(e) => setWeb(e.target.value)}
            type="radio"
            value="NA"
            name="NA"
            checked={web === "NA"}
          ></input>
          N/A
        </div>
        <div className="form-control">
          <label>
            3. "D" Ring/Back Pads - Check “D” rings for distortion, cracks,
            breaks, and rough or sharp edges. The “D” ring should pivot freely.
            “D” ring back pads should also be inspected for damage.{" "}
          </label>
          <div></div>
          <input
            onChange={(e) => setDRing(e.target.value)}
            type="radio"
            value="OK"
            name="OK"
            checked={dRing === "OK"}
          ></input>{" "}
          OK
          <div></div>
          <input
            onChange={(e) => setDRing(e.target.value)}
            type="radio"
            value="Issue"
            name="Issue"
            checked={dRing === "Issue"}
          ></input>
          Issue
          <div></div>
          <input
            onChange={(e) => setDRing(e.target.value)}
            type="radio"
            value="NA"
            name="NA"
            checked={dRing === "NA"}
          ></input>{" "}
          N/A
          <div></div>
        </div>
        <div className="form-control">
          <label>
            4. Attachment of Buckles - Note any unusual wear, frayed or cut
            fiber, or distortion of the buckles
          </label>
          <div></div>
          <input
            onChange={(e) => setBuckles(e.target.value)}
            type="radio"
            value="OK"
            name="OK"
            checked={buckles === "OK"}
          ></input>
          OK
          <div></div>
          <input
            onChange={(e) => setBuckles(e.target.value)}
            type="radio"
            value="Issue"
            name="Issue"
            checked={buckles === "Issue"}
          ></input>
          Issue
          <div></div>
          <input
            onChange={(e) => setBuckles(e.target.value)}
            type="radio"
            value="NA"
            name="NA"
            checked={buckles === "NA"}
          ></input>
          N/A
        </div>
      </form>
    </div>
  );
};

export default FAChecklist;
