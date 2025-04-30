import React from "react";
import { NavLink } from "react-router-dom";
import {
  HouseDoorFill,
  PersonFill,  
  FileMedicalFill,
  JournalMedical,
  CalendarCheckFill,
  Scissors,
  PeopleFill,
  CreditCardFill,
  ChatDotsFill,
  TelephoneFill,
  GearFill,
  
} from "react-bootstrap-icons";
import { FaSyringe , FaPaw} from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

const Sidebar = () => (
  <div className="sidebar d-flex flex-column p-2" style={{ height: "100vh", overflowY: "auto" }}>
    <h5 className="mb-2">
      <FaPaw className="me-2" />
      PetCare
    </h5>

    <nav className="nav flex-column">
      <NavLink to="/Dashboard" className="nav-link ">
        <HouseDoorFill className="me-2" />
        Dashboard
      </NavLink>

      <NavLink to="/profile" className="nav-link">
        <PersonFill className="me-2" />
        Profile
      </NavLink>

      <a href="#" className="nav-link">
        <FaPaw className="me-2" />
        Pet Details
      </a>

      <div className="mt-3 mb-2 fw-bold">Health</div>

      <NavLink to="/vaccinations" className="nav-link">
        <FaSyringe className="me-2" />
        Vaccinations
      </NavLink>

      <a href="#" className="nav-link">
        <FileMedicalFill className="me-2" />
        Medical Records
      </a>

      <a href="#" className="nav-link ">
        <JournalMedical className="me-2" />
        Medical History
      </a>

      <NavLink to="/appointments" className="nav-link">
        <CalendarCheckFill className="me-2" />
        Appointments
      </NavLink>

      <div className="mt-3 mb-2 fw-bold">Services</div>

      <NavLink to="/spa-grooming" className="nav-link ">
        <Scissors className="me-2" />
        Spa & Grooming
      </NavLink>

      <NavLink to="/veterinarians" className="nav-link ">
        <PeopleFill className="me-2" />
        Veterinarians
      </NavLink>

      <a href="#" className="nav-link">
        <CreditCardFill className="me-2" />
        Payments
      </a>

      <div className="mt-3 mb-2 fw-bold">Support</div>

      <NavLink to="/messages" className="nav-link">
        <ChatDotsFill className="me-2" />
        Chat
      </NavLink>

      <a href="#" className="nav-link ">
        <TelephoneFill className="me-2" />
        Emergency
      </a>

      <a href="#" className="nav-link">
        <GearFill className="me-2" />
        Settings
      </a>
    </nav>
  </div>
);

export default Sidebar;
