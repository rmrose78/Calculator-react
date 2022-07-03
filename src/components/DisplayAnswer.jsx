import useCalc, { testContext } from "../context/CalcContext";
import { useContext, useEffect } from "react";

const DisplayAnswer = () => {
  const [state, dispatch] = useContext(testContext);

  useEffect(() => {
    console.log(state.total);
  }, [state.total]);

  return <div id="window--answer">{state.total}</div>;
};

export default DisplayAnswer;
