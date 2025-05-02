import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaCalendarAlt,
  FaUserFriends,
  FaFileMedical,
  FaComments,
  FaPills,
  FaSearch,
  FaCog
} from 'react-icons/fa';
import './VetTheme.css';

const VetSidebar = () => {
  return (
    <div className=" vh-100 border-end p-3" style={{ width: '250px',height: '100vh',position: 'fixed', 
      overflow: 'hidden', }}>
      <h4 className="mb-4 fw-bold">VetCare</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink to="/vet-dashboard" className="nav-link d-flex align-items-center text-dark fw-semibold" activeClassName="active">
            <FaHome className="me-2" /> Dashboard
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/vet-appointments" className="nav-link d-flex align-items-center text-dark" activeClassName="active">
            <FaCalendarAlt className="me-2" /> Appointments
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/patients" className="nav-link d-flex align-items-center text-dark" activeClassName="active">
            <FaUserFriends className="me-2" /> Patients
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/records" className="nav-link d-flex align-items-center text-dark" activeClassName="active">
            <FaFileMedical className="me-2" /> Health Records
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/vet-messages" className="nav-link d-flex align-items-center text-dark" activeClassName="active">
            <FaComments className="me-2" /> Messages
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/prescriptions" className="nav-link d-flex align-items-center text-dark" activeClassName="active">
            <FaPills className="me-2" /> Prescriptions
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/search" className="nav-link d-flex align-items-center text-dark" activeClassName="active">
            <FaSearch className="me-2" /> Search
          </NavLink>
        </li>
        <li className="nav-item mt-auto">
          <NavLink to="/settings" className="nav-link d-flex align-items-center text-dark" activeClassName="active">
            <FaCog className="me-2" /> Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default VetSidebar;
