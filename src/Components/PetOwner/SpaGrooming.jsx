import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppointments } from "./AppointmentsContext"; // 🆕 Import the context
import './SpaGrooming.css';

const SpaGrooming = () => {
  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    service: "",
    date: "",
    time: "",
  });

  const navigate = useNavigate();
  const { addAppointment } = useAppointments(); // 🆕 Get addAppointment from context

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const appointmentWithServiceType = {
      ...formData,
      serviceType: "Grooming", // 🆕 Highlight this line
    };
  
    addAppointment(appointmentWithServiceType); // 🆕 Pass the modified data
    navigate("/appointments");
  };
  

  return (
    <div className="container-fluid p-0 d-flex">
      <Sidebar />
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Spa & Grooming Services</h2>

        <div className="row mb-5 gx-3 w-100">
          <div className="col-md-4">
            <div className="card w-100 h-100">
              <img
                src="https://optimise2.assets-servd.host/quizzical-tiger/production/uploads/dog-taking-a-bath-1030-x-630.jpg?w=1030&h=630&auto=compress%2Cformat&fit=crop&dm=1692677410&s=1f3b3fce3c6541666d645e65379f8bc1"
                className="card-img-top"
                alt="Bathing"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Pet Bathing</h5>
                <p className="card-text">Keep your pet clean and fresh with our gentle bathing services.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card w-100 h-100">
              <img
                src="https://media.istockphoto.com/id/686670196/photo/pet-groomer-with-scissors-makes-grooming-dog.jpg?s=612x612&w=0&k=20&c=p_8EiJk1BGxgh95_8euS6ipA4K_BqjTnfZHelBk6fRI="
                className="card-img-top"
                alt="Haircut"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Hair Trimming</h5>
                <p className="card-text">Professional grooming for all breeds to maintain a neat appearance.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card w-100 h-100">
              <img
                src="https://media.istockphoto.com/id/1392598816/photo/dog-owner-trims-the-nails-of-his-pet-red-welsh-corgi-pembroke-trimming-the-dog-claws-dogs.jpg?s=612x612&w=0&k=20&c=wxkDVsZH78D5n_bRXOdu2jBKSZTglXuGohPEOzwgBGU="
                className="card-img-top"
                alt="Nail Clipping"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Nail Clipping</h5>
                <p className="card-text">Safe and stress-free nail clipping to ensure your pet's comfort.</p>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mb-3">Book an Appointment</h4>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="petName" className="form-label">Pet Name</label>
              <input
                type="text"
                id="petName"
                name="petName"
                className="form-control"
                value={formData.petName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="petType" className="form-label">Pet Type (e.g., Dog, Cat)</label>
              <input
                type="text"
                id="petType"
                name="petType"
                className="form-control"
                value={formData.petType}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="service" className="form-label">Preferred Service</label>
              <select
                id="service"
                name="service"
                className="form-select"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Bathing">Bathing</option>
                <option value="Hair Trimming">Hair Trimming</option>
                <option value="Nail Clipping">Nail Clipping</option>
                <option value="Full Grooming">Full Grooming</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="date" className="form-label">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="time" className="form-label">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                className="form-control"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary mb-5">
            Get Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default SpaGrooming;
