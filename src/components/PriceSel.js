import DoneIcon from "@mui/icons-material/Done";
import React, { useState } from "react";
const PriceSel = () => {
  var [count, setCount] = useState("true");
  const [state, setState] = useState("");
  return (
    <>
      <label
        className="tag_price"
        onClick={() => {
          setState("false");
          setCount("false");
        }}
      >
        <input type="radio" name="cost" id="cost" />
        <span className="contents">
          <div className="textcontent">
            <h2>1 Months Pack (4tubes)</h2>
            <p className="savings">Savings: ₹200</p>
            <p className="tag-marks">
              <span className="saved-percent">38% Saved</span>{" "}
              <span className="tag-best">Best Results</span>
            </p>
          </div>
          <div className="cutcost">
            <p>₹595</p>
            <p className="junk-price">₹795</p>
          </div>
        </span>
        <span className="tick">{state === "false" ? <DoneIcon /> : ""}</span>
      </label>
      <br />
      <label className="tag_price" onClick={() => setState("true")}>
        <input type="radio" name="cost" id="cost" defaultChecked />
        <span className="contents">
          <div className="textcontent">
            <h2>3 Months Pack (12tubes)</h2>
            <p className="savings">Savings: ₹100</p>
            <p className="tag-marks">
              <span className="saved-percent">12% Saved</span>{" "}
              <span className="tag-best"></span>
            </p>
          </div>
          <div className="cutcost">
            <p>₹595</p>
            <p className="junk-price">₹795</p>
          </div>
        </span>
        <span className="tick">
          {state === "true" || count === "true" ? <DoneIcon /> : ""}
        </span>
      </label>
    </>
  );
};
export default PriceSel;
