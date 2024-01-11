import React from 'react';
import './EditPatient.css'; // Import your CSS file for styling

export default function EditPatient({ handleEditSubmit, handleCancelBtn, selectedEditData }) {
  return (
    <div className="edit-patient-container">
      <h3>EDIT FORM:</h3>
      <form onSubmit={(e) => handleEditSubmit(e, selectedEditData.patient_id)}>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" defaultValue={selectedEditData.first_name} />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name" defaultValue={selectedEditData.last_name} />
        </div>

        <div className="form-group">
          <label htmlFor="blood">Blood Group:</label>
          <input type="text" id="blood" name="blood" defaultValue={selectedEditData.blood} />
        </div>

        <div className="button-group">
          <button type="submit">EDIT</button>
          <button type="button" onClick={handleCancelBtn}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
