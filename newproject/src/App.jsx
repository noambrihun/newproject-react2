import { useState } from "react";
import "./App.css";

import original_students from "./data/students.js";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AddStudents from "./components/AddStudents.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [students, setStudents] = useState(original_students);

  return (
    <div className="app">
      <Header />
      <Dashboard students={students} />
      <AddStudents students={students} setStudents={setStudents} />
      <Footer />
    </div>
  );
}

export default App;