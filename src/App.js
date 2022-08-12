import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./components/basicCalculator/Calculator";
import Bmi from "./components/Bmi/Bmi";
import Navbar from "./components/Navbar/Navbar";
import LoanCalculator from "./components/LoanCalculator/loanCalculator";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
function App() {
  const [dark, setDark] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeContext.Provider value={{ dark, setDark }}>
          <Navbar />
        </ThemeContext.Provider>
        <ThemeContext.Provider value={{ dark }}>
          <Routes>
            <Route exact path="/" element={<Calculator />} />
            <Route exact path="/bmi" element={<Bmi />} />
            <Route exact path="/loancalculator" element={<LoanCalculator />} />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
