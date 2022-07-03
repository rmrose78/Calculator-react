import Button from "./Button";
import useCalc, { testContext } from "../context/CalcContext";
import { useContext, useEffect } from "react";

const NUMPAD_NAMES = [
  ["C", "+/-", "%", "x"],
  [7, 8, 9, "/"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  ["<-", 0, ".", "="],
];

function NumPad() {
  const [state, dispatch] = useContext(testContext);

  const handleButtonClick = (btnName) => {
    console.log({ btnName });
    if (typeof btnName === "number") {
      dispatch({
        type: "NUMBER",
        inputValue: btnName,
      });
    } else if (btnName === "+") {
      dispatch({
        type: "ADD",
      });
    } else if (btnName === "=") {
      dispatch({
        type: "EQUALS",
      });
    } else {
      throw new Error("Button selected has no action");
    }
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  const buttons = NUMPAD_NAMES.flat().map((btnName, i) => (
    <button key={`btn-${i}`} onClick={() => handleButtonClick(btnName)}>
      {btnName}
    </button>
  ));

  return <div className="grid">{buttons}</div>;
}

export default NumPad;
