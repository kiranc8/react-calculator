import { React, useState } from "react";
import { evaluate } from "mathjs";
import './Calculator.css'
const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [click, setClick] = useState(false);
  console.log("hii");

  const operators = ["+", "-", "*", "/", "%", ".", "^"];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult(evaluate(calc + value));
    }
  };

  const clearAll = () => {
    setCalc("");
    setResult("");
    setClick(false);
  };

  const clear = () => {
    setCalc(calc.slice(0, -1));
    setClick(false);
  };
  return (
    <div className="container">
      <div className="heading">React Calculator</div>
      <div className="wrapper">
        <div className="display">{click ? result : ""}</div>
        <div className="display">{calc}</div>
        <div className="buttons">
          <div className="btn btn_blue" onClick={clearAll}>
            AC
          </div>
          <div className="btn btn_blue" onClick={clear}>
            C
          </div>
          <div className="btn btn_blue" onClick={() => updateCalc("%")}>
            %
          </div>
          <div className="btn btn_blue" onClick={() => updateCalc("/")}>
            /
          </div>
        </div>
        <div className="buttons">
          <div className="btn" onClick={() => updateCalc("7")}>
            7
          </div>
          <div className="btn" onClick={() => updateCalc("8")}>
            8
          </div>
          <div className="btn" onClick={() => updateCalc("9")}>
            9
          </div>
          <div
            className="btn btn_blue"
            value="x"
            onClick={() => updateCalc("*")}
          >
            x
          </div>
        </div>
        <div className="buttons">
          <div className="btn" onClick={() => updateCalc("4")}>
            4
          </div>
          <div className="btn" onClick={() => updateCalc("5")}>
            5
          </div>
          <div className="btn" onClick={() => updateCalc("6")}>
            6
          </div>
          <div
            className="btn btn_blue"
            value="-"
            onClick={() => updateCalc("-")}
          >
            -
          </div>
        </div>
        <div className="buttons">
          <div className="btn" onClick={() => updateCalc("1")}>
            1
          </div>
          <div className="btn" onClick={() => updateCalc("2")}>
            2
          </div>
          <div className="btn" onClick={() => updateCalc("3")}>
            3
          </div>
          <div
            className="btn btn_blue"
            value="+"
            onClick={() => updateCalc("+")}
          >
            +
          </div>
        </div>
        <div className="buttons">
          <div className="btn" onClick={() => updateCalc("^")}>
            ^
          </div>
          <div className="btn" onClick={() => updateCalc("0")}>
            0
          </div>
          <div className="btn" onClick={() => updateCalc(".")}>
            .
          </div>
          <div
            className="btn btn_blue"
            value="="
            onClick={() => setClick(true)}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
