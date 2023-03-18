import React, { useState, useEffect } from "react";

const DarkContext = React.createContext({
  isDark: false,
  checkToggle: () => {},
});

export const DarkContextProvider = (props) => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("isDark") === "1"
  );

  useEffect(() => {
    const storedDarkStateInformation = localStorage.getItem("isDark");
    if (storedDarkStateInformation === "1") {
      setIsDark(true);
    } else if (storedDarkStateInformation === "0") {
      setIsDark(false);
    }
  }, []);

  const checkToggle = (value) => {
    setIsDark(value);
  };

  return (
    <DarkContext.Provider
      value={{
        isDark,
        checkToggle,
      }}
    >
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkContext;
