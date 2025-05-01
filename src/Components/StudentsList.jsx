import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(stored);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updated = students.filter((_, i) => i !== indexToDelete);
    localStorage.setItem("students", JSON.stringify(updated));
    setStudents(updated);
  };

  const handleEdit = (student, index) => {
    navigate("/students-form", { state: { student, index } });
  };

  return (
    <div className="container py-4">
      <div className="card">
        <div className="card-body">
        <h1 className="text-center text-white bg-primary p-3 rounded">Students Information</h1>
      <div className="row justify-content-center mt-4">
        {students.map((student, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card shadow-sm h-100 glass-card">
              <div className="card-body">
                <h3 className="card-title text-white text-center fw-bold">{student.Name}</h3>
                <p className="card-subtitle mb-3 text-center fs-5 text-white">
                  {student.Degree} - {student.Department}
                </p>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item"><strong>Age:</strong> {student.Age}</li>
                  <li className="list-group-item"><strong>Phone:</strong> {student.PhoneNo}</li>
                  <li className="list-group-item"><strong>Email:</strong> {student.EmailId}</li>
                </ul>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary col-5" onClick={() => handleEdit(student, index)}>Edit</button>
                  <button className="btn btn-danger col-5" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsList;
