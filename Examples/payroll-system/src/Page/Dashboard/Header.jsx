import React from "react";

function Header({ setIsAdding }) {
  return (
    <header>
      <h1>Employee's Payroll System</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button
          id="addButton"
          name="addButton"
          onClick={() => setIsAdding(true)}
          className="round-button"
        >
          Add payroll entry
        </button>
      </div>
      <button
        id="downloadButton"
        name="downloadButton"
        onClick={() => window.print()}
        className="round-button"
      >
        Download the employee's payroll list
      </button>
    </header>
  );
}

export default Header;
