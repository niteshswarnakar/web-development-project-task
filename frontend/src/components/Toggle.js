import React, { useRef, useContext } from "react";
import DarkContext from "../store/DarkContext";
import styles from "./Toggle.module.scss";

const Toggle = () => {
  const inputValue = useRef();
  const ctx = useContext(DarkContext);

  const handleClick = () => {
    const toggle = inputValue.current.checked;
    localStorage.setItem("isDark", toggle ? "1" : "0");
    ctx.checkToggle(toggle);
  };

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        ref={inputValue}
        onChange={handleClick}
        checked={ctx.isDark}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Toggle;
