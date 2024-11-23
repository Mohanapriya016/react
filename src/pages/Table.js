import React from "react";

const Table = () => {
  const data = [
    { id: 1, name: "Vaishnavi", relationship: "Sister", dob: "1988-10-04", status: "Active" },
    { id: 2, name: "Mohanapriya", relationship: "Sister", dob: "1988-10-04", status: "Inactive" },
    { id: 3, name: "Ashoken", relationship: "Sister", dob: "2005-07-14", status: "Active" },
  ];

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>S. No</th>
            <th>Name</th>
            <th>Relationship</th>
            <th>Date of Birth</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.relationship}</td>
              <td>{row.dob}</td>
              <td className={row.status === "Active" ? "text-success" : "text-danger"}>
                {row.status}
              </td>
              <td>
  <button
    className="btn btn-sm border me-2"
    style={{ backgroundColor: "transparent", color: "black" }}
  >
    Edit
  </button>
  <button
    className="btn btn-sm border"
    style={{ backgroundColor: "transparent", color: "black" }}
  >
    Delete
  </button>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
