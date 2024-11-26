import React from "react";
import { useParams } from "react-router-dom";

const EmployeeDetails = ({ employees }) => {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id));

  return (
    <div>
      {employee ? (
        <>
          <h2>Employee Details</h2>
          <p>Name: {employee.name}</p>
          <p>Role: {employee.role}</p>
        </>
      ) : (
        <p>Employee not found!</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
