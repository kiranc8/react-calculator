import { React, useState } from "react";
import { evaluate } from "mathjs";
import "./Calculator.css";
import Switch from "@mui/material/Switch";
const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [dark, setDark] = useState(false);

  const operators = ["+", "-", "*", "/", "%", ".", "^"];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };

  const clearAll = () => {
    setCalc("");
  };

  const clear = () => {
    setCalc(calc.slice(0, -1));
  };

  const handleChange = () => {
    setDark(!dark);
  };

  const equalTo =()=>{
    if(operators.includes(calc.slice(-1))){
      return
    }
    setCalc(evaluate(calc).toString())
  }
  return (
    <div className={dark ? "container-dark" : "container"}>
      <div className="toggle-button">
        <span className={dark ? "label-dark" : "label"}>
          {dark ? "Light" : "Dark"}
        </span>
        <Switch
          checked={dark}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <div className={dark ? "wrapper-dark" : "wrapper"}>
        <div className={dark ? "display-wrapper-dark" : "display-wrapper"}>
          <div className={dark ? "display-dark" : "display"}>{calc}</div>
        </div>
        <div className="buttons">
          <div
            className={dark ? "btn-dark btn_operator-dark" : "btn btn_operator"}
            onClick={clearAll}
          >
            AC
          </div>
          <div
            className={dark ? "btn-dark btn_operator-dark" : "btn btn_operator"}
            onClick={clear}
          >
            C
          </div>
          <div
            className={dark ? "btn-dark btn_operator-dark" : "btn btn_operator"}
            onClick={() => updateCalc("%")}
          >
            %
          </div>
          <div
            className={dark ? "btn-dark btn_operator-dark" : "btn btn_operator"}
            onClick={() => updateCalc("/")}
          >
            /
          </div>
        </div>
        <div className="buttons">
          <div
            className={dark ? "btn-dark" : "btn"}
            onClick={() => updateCalc("7")}
          >
            7
          </div>
          <div
            className={dark ? "btn-dark" : "btn"}
            onClick={() => updateCalc("8")}
          >
            8
          </div>
          <div
            className={dark ? "btn-dark" : "btn"}
            onClick={() => updateCalc("9")}
          >
            9
          </div>
          <div
            className={dark ? "btn-dark btn_operator-dark" : "btn btn_operator"}
            value="x"
            onClick={() => updateCalc("*")}
          >
            x
          </div>
        </div>
        <div className="buttons">
          <div
            className={dark ? "btn-dark" : "btn"}
            onClick={() => updateCalc("4")}
          >
            4
          </div>
          <div
            className={dark ? "btn-dark" : "btn"}
            onClick={() => updateCalc("5")}
          >
            5
          </div>
          <div
            className={dark ? "btn-dark" : "btn"}
            onClick={() => updateCalc("6")}
          >
            6
          </div>
          <div
            className={dark ? "btn-dark btn_operator-dark" : "btn btn_operator"}
            value="-"
            onClick={() => updateCalc("-")}
          >
            -
          </div>
        </div>
        <div className="buttons">
          <div
            className={dark ? "btn-dark" : "btn"}
            onClick={() => updateCalc("1")}
          >
            1
          </div>
          <div
            className={dark ? "btn-dark" : "btn"}
            onClick={() => updateCalc("2")}
          >
            2
          </div>
          <div
            className={dark ? "btn-dark" : "btn"}
            onClick={() => updateCalc("3")}
          >
            3
          </div>
          <div
            className={dark ? "btn-dark btn_operator-dark" : "btn btn_operator"}
            value="+"
            onClick={() => updateCalc("+")}
          >
            +
          </div>
        </div>
        <div className="buttons">
          <div
            className={dark ? "btn-dark" : "btn"}
            onClick={() => updateCalc("^")}
          >
            ^
          </div>
          <div
            className={dark ? "btn-dark" : "btn"}
            onClick={() => updateCalc("0")}
          >
            0
          </div>
          <div
            className={dark ? "btn-dark" : "btn"}
            onClick={() => updateCalc(".")}
          >
            .
          </div>
          <div
            className={dark ? "btn-dark btn_operator-dark" : "btn btn_operator"}
            value="="
            onClick={equalTo}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
