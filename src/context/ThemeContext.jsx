import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.paylod };
    case "CHANGE_MODE":
      return { ...state, mode: action.paylod };

    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#58249c",
    mode: "dark",
  });
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", paylod: color });
  };
  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", paylod: mode });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
