import React from "react";

const Sidebar = ({ profileImage }) => {
  return (
    <div className="bg-dark text-white text-center vh-100 d-flex flex-column align-items-center justify-content-center">
      <img
        src={profileImage} // Use the imported image prop
        alt="Profile"
        className="rounded-circle mb-3"
        style={{ height: "30%", width: "55%" }}
      />
      <h6>D.O.C: 28.04.2023</h6>
      <h6>
        Status: <span className="text-white">Complete</span>
      </h6>
      <button className="btn btn-light text-decoration-underline btn-sm mt-3">
        Back Home
      </button>
    </div>
  );
};

export default Sidebar;
