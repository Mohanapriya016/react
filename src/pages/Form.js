import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    sno: "",
    name: "",
    relationship: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add logic to update table data
    setFormData({ sno: "", name: "", relationship: "", dob: "" });
  };

  return (
    <div className="container mt-4">
      <div className="p-4 border rounded shadow">
        {/* Form with Border */}
        <h5>Add New Beneficiary</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">S.No</label>
            <input
              type="number"
              name="sno"
              value={formData.sno}
              onChange={handleChange}
              className="form-control"
              placeholder="serial number"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="enter name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Relationship</label>
            <input
              type="text"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              className="form-control"
              placeholder="enter relationship"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Add Beneficiary
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
