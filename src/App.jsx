import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentsForm from './Components/StudentsForm';
import StudentsList from './Components/StudentsList';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/students-form" element={<StudentsForm/>} />
        <Route path="/students-list" element={<StudentsList/>} />
      </Routes>
    </Router>
  );
}

export default App;
