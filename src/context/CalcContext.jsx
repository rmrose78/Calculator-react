import { createContext, useReducer, useContext } from "react";
import calcReducer, { initialState } from "./reducer/calcReducer";

export const CalcContext = createContext(initialState);

export const testContext = createContext();
