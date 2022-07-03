const ACTIONS = {
  NUMBER: "NUMBER",
  ADD: "ADD",
  // SUBTRACT: "SUBTRACT",
  // MULTIPLY: "MULTIPLY",
  // DIVIDE: "DIVIDE",
  // SIGN: "SIGN",
  // DECIMAL: "DECIMAL",
  EQUALS: "EQUALS",
  // CLEAR_PREVIOUS: "CLEAR_PREVIOUS",
  // CLEAR: "CLEAR",
};

export const initialState = {
  total: 0,
  currentValue: "",
  inputValue: 0,
  prevValue: 0,
  // operand: "",
  // inputStr: "0",
};

const calcReducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case ACTIONS.NUMBER:
      return {
        ...state,
        currentValue: "" + state.currentValue + action.inputValue,
        inputValue: action.inputValue,
      };
    case ACTIONS.ADD:
      return {
        ...state,
        total: state.prevValue + state.currentValue,
        prevValue: state.currentValue,
        currentValue: initialState.currentValue,
      };
    case ACTIONS.EQUALS:
      return {
        ...state,
        total: state.prevValue + state.currentValue,
      };
    default:
      throw new Error(`No case for type ${action.type} found in calcReducer.`);
  }
};

export default calcReducer;
