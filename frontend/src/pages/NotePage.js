// ---------------------------------------------------------------- //
//                                                                  //
// This component is related to all the operations performed on a   //
// single 'selected' note                                           //
//                                                                  //
// ---------------------------------------------------------------- //

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import { ReactComponent as ArrowLeft } from "../assets/chevron-left.svg";
import styles from "../App.module.scss";

const NotePage = () => {
  // This hook get the 'id' from the url and it has to be 'id' because
  // because of Routing path used in 'App.js'
  let { id } = useParams();

  // This hook set the current note value
  const [note, setNote] = useState(null);

  // This hook is used for getting the 'selected' note from the database
  useEffect(() => {
    // declare the async data fetching function
    const getNote = async () => {
      if (id === "new") return;
      // get the data from the api
      let response = await axios.get(`/api/notes/${id}`);

      // set the value of 'note' to the data fetched from api
      setNote(response.data);
    };

    getNote();
  }, [id]);

  // Creates the note
  const createNote = async () => {
    await axios.post(`/api/notes/create/`, {
      body: note.body,
    });
  };

  // Updates the current note
  const updateNote = async () => {
    await axios.put(`/api/notes/${id}/update/`, {
      body: note.body,
    });
  };

  // Deletes the current note
  const deleteNote = async () => {
    await axios.delete(`/api/notes/${id}/delete/`);
  };

  // Submits (saves) the note
  const handleSubmit = () => {
    const isValid = note === null ? false : note.body.trim().length !== 0;
    if (!isValid && id !== "new") {
      deleteNote();
    } else if (isValid && id !== "new") {
      updateNote();
    } else if (isValid && id === "new") {
      createNote();
    }
  };

  return (
    <div className={styles.note}>
      <div className={styles["note-header"]}>
        <h3>
          <Link to="/">
            {id !== "new" ? (
              <ArrowLeft onClick={handleSubmit} />
            ) : (
              <ArrowLeft />
            )}
          </Link>
        </h3>
        <Link to="/">
          {id !== "new" ? (
            <button onClick={deleteNote}> Delete</button>
          ) : (
            <button onClick={handleSubmit}>Done</button>
          )}
        </Link>
      </div>
      <textarea
        onChange={(e) => {
          setNote((prevNote) => {
            return { ...prevNote, body: e.target.value };
          });
        }}
        value={note?.body}
      />
    </div>
  );
};

export default NotePage;
