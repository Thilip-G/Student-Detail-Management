import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormImg from "../assets/form-mg.jpg"

const StudentsForm = () => {
  const [student, setStudent] = useState({
    Name: "",
    Age: "",
    Degree: "",
    Department: "",
    EmailId: "",
    PhoneNo: ""
  });

  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.student && location.state?.index !== undefined) {
      setStudent(location.state.student);
      setEditIndex(location.state.index);
    }
  }, [location]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setStudent((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem("students")) || [];

    if (editIndex !== null) {
      students[editIndex] = student;
    } else {
      students.push(student);
    }

    localStorage.setItem("students", JSON.stringify(students));
    navigate("/students-list");
  };

  return (
    <div className="container py-5">
      <div className="row mt-5">
        <div className="col-md-7 col-12">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center text-white bg-primary p-3 roundedd">
                {editIndex !== null ? "Edit Student" : "Add Student"}
              </h1>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <input
                  type="text"
                  id="Name"
                  placeholder="Name"
                  value={student.Name}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
                {/* Age */}
                <input
                  type="number"
                  id="Age"
                  placeholder="Age"
                  value={student.Age}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
                {/* Degree */}
                <input
                  type="text"
                  id="Degree"
                  placeholder="Degree"
                  value={student.Degree}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
                {/* Department */}
                <input
                  type="text"
                  id="Department"
                  placeholder="Department"
                  value={student.Department}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
                {/* Email */}
                <input
                  type="email"
                  id="EmailId"
                  placeholder="Email"
                  value={student.EmailId}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
                {/* Phone */}
                <input
                  type="tel"
                  id="PhoneNo"
                  placeholder="Phone"
                  value={student.PhoneNo}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  {editIndex !== null ? "Update Student" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-5 d-none d-md-block">
          <img src={FormImg} className="img-fluid h-100 w-100 object-fit-cover" />
        </div>
      </div>
    </div>
  );
};

export default StudentsForm;
