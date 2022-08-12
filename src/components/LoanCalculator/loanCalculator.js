import React, { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./loanCalculator.css";
const LoanCalculator = () => {
  const { dark } = useContext(ThemeContext);
  const [amount, setAmount] = useState("");
  const [year, setYear] = useState("");
  const [interest, setInterest] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalInterest, setTotalInterest] = useState("");
  const [totalPayment, setTotalPayment] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    switch (name) {
      case "amount":
        setAmount(e.target.value);
        console.log(e.target.value);
        break;
      case "year":
        setYear(e.target.value);
        break;
      case "interest":
        setInterest(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    const principal = amount;
    const calculateInterest = interest / 100 / 12;
    const calculatedPayment = year * 12;

    //calculate monthly payment
    const x = Math.pow(1 + calculateInterest, calculatedPayment);
    const monthly = (principal * x * calculateInterest) / (x - 1);
    setMonthlyPayment(monthly.toFixed(2));

    //Compute interest
    setTotalInterest((monthly * calculatedPayment - principal).toFixed(2));

    //compute total payment
    setTotalPayment((monthly * calculatedPayment).toFixed(2));
  };

  return (
    <div className={dark ? "loan-container-dark" : "loan-container"}>
      <div className={dark ? "loan-wrapper-dark" : "loan-wrapper"}>
        <span className="bmi-heading">Loan Calculator</span>
        <table>
          <tbody>
            <tr>
              <td>
                <span className="loan-label">Loan Amount</span>
              </td>
              <td>
                <input
                  className={dark ? "input-dark" : "input"}
                  name="amount"
                  type="number"
                  min="0"
                  placeholder="₹"
                  value={amount}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <span className="loan-label">Loan Term</span>
              </td>
              <td>
                <input
                  className={dark ? "input-dark" : "input"}
                  name="year"
                  type="number"
                  placeholder="years"
                  min="0"
                  value={year}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <span className="loan-label">Interest</span>
              </td>
              <td>
                <input
                  className={dark ? "input-dark" : "input"}
                  name="interest"
                  type="number"
                  min="0"
                  placeholder="%"
                  value={interest}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="loan-button" onClick={handleClick}>
          CALCULATE
        </button>
        <div className="loan-result">
          {monthlyPayment ? "Monthly payment : " + monthlyPayment : ""}
        </div>
        <div className="loan-result">
          {totalInterest ? "Total interest : " + totalInterest : ""}
        </div>
        <div className="loan-result">
          {totalPayment ? "Total payment : " + totalPayment : ""}
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
