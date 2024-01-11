
import React, { useEffect, useState } from 'react';
import { getpatient, addpatient, editpatient, deletepatient } from '../services/ApiService';
import AddPatient from './AddPatient';
import EditPatient from './EditPatient';
import './PatientList.css'; // Import your CSS file for styling

export default function PatientList() {
    const [patients, setPatients] = useState([]);
    const [showAddPatientForm, setShowAddPatientForm] = useState(false);
    const [showEditPatientForm, setShowEditPatientForm] = useState(false);
    const [selectedEditData, setSelectedEditData] = useState();

    useEffect(() => {
        let mount = true;
        getpatient().then((res) => {
            if (mount) {
                console.log("res from api", res);
                setPatients(res);
            }
            return () => (mount = false);
        });
    }, []);

    const handleAddSubmit = (e) => {
        addpatient(e.target).then((res) => {
            setPatients(res);
            setShowAddPatientForm(false); // Close the form after submission
        });
    };

    const handleEditBtn = (patient) => {
        setSelectedEditData(patient);
        setShowEditPatientForm(true);
        setShowAddPatientForm(false);
    };

    const handleEditSubmit = (e, id) => {
        editpatient(id, e.target).then((res) => {
            setPatients(res);
            setShowEditPatientForm(false); // Close the form after submission
        });
    };

    const handleCancelBtn = () => {
        setShowAddPatientForm(false);
        setShowEditPatientForm(false);
    };

    const handleDeleteBtn = (id) => {
        deletepatient(id).then((res) => {
            setPatients(patients.filter((p) => p.patient_id !== id));
        });
    };

    return (
        <div className="patient-list-container">
            <h3>PATIENT LIST</h3>
            <table className="patient-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Blood Group</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.patient_id}>
                            <td>{patient.first_name}</td>
                            <td>{patient.last_name}</td>
                            <td>{patient.blood}</td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEditBtn(patient)}>
                                    Edit
                                </button>
                                <button className="delete-btn" onClick={() => handleDeleteBtn(patient.patient_id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="add-btn" onClick={() => setShowAddPatientForm(true)}>
                Add New Patient
            </button>
            {showAddPatientForm && <AddPatient handleAddSubmit={handleAddSubmit} handleCancelBtn={handleCancelBtn} />}
            {showEditPatientForm && <EditPatient handleEditSubmit={handleEditSubmit} selectedEditData={selectedEditData} handleCancelBtn={handleCancelBtn} />}
        </div>
    );
}
