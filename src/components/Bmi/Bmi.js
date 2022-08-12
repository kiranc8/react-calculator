import React, { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./Bmi.css";
const Bmi = () => {
  const { dark } = useContext(ThemeContext);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [detail, setDetail] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    if (name === "weight") {
      setWeight(e.target.value);
    } else {
      setHeight(e.target.value);
    }
  };
  const calculate = () => {
    if (weight < 0 || height < 0 || height === "" || weight === "") {
      setResult("Please provide valid value");
      setDetail("");
    } else {
      let res = (weight / ((height / 100) * (height / 100))).toFixed(2);
      if (res < 16) {
        setResult(res);
        setDetail("Severe Thinness");
      } else if (res < 17 && res >= 16) {
        setResult(res);
        setDetail("Moderate Thinness");
      } else if (res < 18.5 && res >= 17) {
        setResult(res);
        setDetail("Mild Thinness");
      } else if (res < 25 && res >= 18.5) {
        setResult(res);
        setDetail("Normal");
      } else if (res < 30 && res >= 35) {
        setResult(res);
        setDetail("Overweight");
      } else if (res < 35 && res >= 30) {
        setResult(res);
        setDetail("Obese Class I");
      } else if (res < 40 && res >= 35) {
        setResult(res);
        setDetail("Obese Class II");
      } else {
        setResult(res);
        setDetail("Obese Class III");
      }
    }
  };

  return (
    <div className={dark ? "bmi-container-dark" : "bmi-container"}>
      <div className={dark ? "bmi-wrapper-dark" : "bmi-wrapper"}>
        <span className="bmi-heading">BMI Calculator</span>
        <input
          className={dark ? "bmi-input-dark" : "bmi-input"}
          name="height"
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={handleChange}
        ></input>

        <input
          className={dark ? "bmi-input-dark" : "bmi-input"}
          name="weight"
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={handleChange}
        ></input>
        <button className="bmi-button" onClick={calculate}>
          CALCULATE
        </button>
        <div className="result">{result ? result : ""}</div>
        <div className="detail">{detail ? detail : ""}</div>
      </div>
    </div>
  );
};

export default Bmi;
