import { useContext } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import Toggle from "./components/Toggle";

import styles from "./App.module.scss";
import DarkContext from "./store/DarkContext";
import Login from "./Login";

function App() {
  const mycontext = useContext(DarkContext);

  return (
    <div
      className={`${styles.container} ${
        mycontext.isDark === true ? styles.dark : ""
      }`}>
      <div className={styles.app}>
        <Toggle />
        <Router>
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="note/:id" element={<NotePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
