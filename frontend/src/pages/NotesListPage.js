import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";
import axios from "axios";

import styles from "../App.module.scss";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const NotesListPage = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [isLogged, setIsLogged] = useState(localStorage.getItem("email"));

  useEffect(() => {
    getNotes();
    if (!isLogged) {
      navigate("/login");
    }
  }, []);

  const getNotes = async () => {
    const response = await axios.get(`/api/notes`);
    setNotes(response.data);
  };

  return (
    <>
      <Header />
      <div className={styles.notes}>
        <div className={styles["notes-header"]}>
          <h2 className={styles["notes-title"]}>&#9782; Product</h2>
          <p className={styles["notes-count"]}>{notes.length}</p>
        </div>

        <div className={styles["notes"]}>
          <div className={styles["notes-list"]}>
            {notes.map((note) => {
              return <ListItem key={note.id} note={note} />;
            })}
          </div>
          <AddButton className={styles.round} />
        </div>
      </div>
    </>
  );
};

export default NotesListPage;
