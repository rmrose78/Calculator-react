import "./styles/App.css";
import { useReducer } from "react";
import NumPad from "./components/NumPad";
import DisplayInput from "./components/DisplayInput";
import DisplayAnswer from "./components/DisplayAnswer";
import { CalcProvider, testContext } from "./context/CalcContext";
import calcReducer, { initialState } from "./context/reducer/calcReducer";

function App() {
  const [state, dispatch] = useReducer(calcReducer, initialState);

  return (
    // <CalcProvider>
    <testContext.Provider value={[state, dispatch]}>
      <div className="main-container">
        <div id="window">
          <DisplayInput />
          <DisplayAnswer />
        </div>
        <NumPad />
      </div>
    </testContext.Provider>
    // </CalcProvider>
  );
}

export default App;
