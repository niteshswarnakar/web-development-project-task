import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../App.module.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["app-header"]}>
      <li to="/">Home</li>
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}>
        Logout
      </button>
    </div>
  );
};

export default Header;
