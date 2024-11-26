import React, { useState } from "react";

const AddEmployee = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && role) {
      onAdd({ name, role });
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Role" onChange={(e) => setRole(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddEmployee;
