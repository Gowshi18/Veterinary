import React, { useEffect, useState } from 'react';
import axios from 'axios';

import VetLayout from './VetLayout';

const VetAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/appointments') // Change URL if needed
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  const getStatusBadge = (status) => {
    const base = "badge rounded-pill px-3 py-1 fw-semibold";
    return status === "Confirmed"
      ? `${base} text-bg-dark`
      : `${base} border text-dark`;
  };

  return (
    <div className="container-fluid p-0 d-flex">
              <VetLayout />
    <div className="container mt-4">
      <div className="card shadow-sm rounded-4">
        <div className="card-body">
          <h4 className="fw-bold">Upcoming Appointments</h4>
          <p className="text-muted mb-4">View and manage your scheduled appointments.</p>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr className="text-muted fw-semibold">
                  <th scope="col">Date & Time</th>
                  <th scope="col">Pet</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, index) => (
                  <tr key={index}>
                    <td>
                      <div className="fw-semibold">{appt.date}</div>
                      <div className="text-muted small">{appt.time}</div>
                    </td>
                    <td>
                      <div className="fw-semibold">{appt.petName}</div>
                      <div className="text-muted small">{appt.petType}, {appt.breed}</div>
                    </td>
                    <td className="fw-semibold">{appt.ownerName}</td>
                    <td>{appt.reason}</td>
                    <td>
                      <span className={getStatusBadge(appt.status)}>
                        {appt.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm text-muted">
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                    </td>
                  </tr>
                ))}
                {appointments.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center text-muted py-4">No appointments found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VetAppointments;
