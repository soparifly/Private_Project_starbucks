import React, { createContext, useContext } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

function AppContextProvider({ children }) {
  const appProps = {};

  return <AppContext.Provider value={appProps}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
