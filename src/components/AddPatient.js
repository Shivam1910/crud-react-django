import React from 'react';
import './AddPatient.css'; // Import your CSS file for styling

const AddPatient = ({ handleAddSubmit, handleCancelBtn }) => {
  return (
    <div className="add-patient-container">
      <h3>ADD FORM:</h3>
      <form onSubmit={handleAddSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name" />
        </div>

        <div className="form-group">
          <label htmlFor="blood">Blood Group:</label>
          <input type="text" id="blood" name="blood" />
        </div>

        <div className="button-group">
          <button type="submit">ADD</button>
          <button type="button" onClick={handleCancelBtn}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;
