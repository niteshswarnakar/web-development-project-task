import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import styles from "../App.module.scss";

const AddButton = (props) => {
  return (
    <Link to="/note/new" className={styles["floating-button"]}>
      <AddIcon />
    </Link>
  );
};

export default AddButton;
