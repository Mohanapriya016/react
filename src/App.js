import React from "react";
import Sidebar from "./pages/Sidebar";
import Table from "./pages/Table";
import Form from "./pages/Form";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images from the 'src' folder if needed
import profileImage from "./pages/images/a4.jpeg"; // Example of importing an image

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <Sidebar profileImage={profileImage} /> {/* Pass image as a prop */}
        </div>

        {/* Main Content */}
        <div className="col-md-9 p-4">
          {/* Action Buttons */}
          <div className="mb-3">
            {["ADD Beneficiaries", "ADD Asset", "ADD Liability", "CREATE Links", "ADD Signatures", "Will Generation"].map(
              (btnText) => (
                <button className="btn btn-primary m-1" key={btnText}>
                  {btnText}
                </button>
              )
            )}
          </div>

          {/* Table */}
          <Table />

          {/* Form */}
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
