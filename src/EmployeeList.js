import React from "react";
import { Link } from "react-router-dom";

const EmployeeList = ({ employees, onDelete }) => {
  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found!</p>
      ) : (
        <ul>
          {employees.map((emp) => (
            <li key={emp.id}>
              {emp.name} - {emp.role}{" "}
              <Link to={`/details/${emp.id}`}>View Details</Link>{" "}
              <button onClick={() => onDelete(emp.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
