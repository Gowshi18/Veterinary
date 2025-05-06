import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const veterinarians = [
  {
    id: "1",
    name: "Dr. Meera Suresh",
    specialization: "Small Animal Surgery",
    clinicName: "Happy Paws Clinic",
  },
  {
    id: "2",
    name: "Dr. Rajesh Kumar",
    specialization: "Dermatology",
    clinicName: "Skin & Fur Veterinary Center",
  },
  {
    id: "3",
    name: "Dr. Priya Menon",
    specialization: "Cardiology",
    clinicName: "Purrfect Hearts Veterinary Hospital",
  },
  {
    id: "4",
    name: "Dr. Arjun Iyer",
    specialization: "Orthopedics",
    clinicName: "PawSteps Veterinary Clinic",
  },
  {
    id: "5",
    name: "Dr. Kavitha Nair",
    specialization: "Dentistry",
    clinicName: "Smile & Wag Animal Care",
  },
  {
    id: "6",
    name: "Dr. Sandeep Reddy",
    specialization: "Neurology",
    clinicName: "Brain & Spine Veterinary Center",
  },
  {
    id: "7",
    name: "Dr. Anjali Sharma",
    specialization: "Oncology",
    clinicName: "Hope Veterinary Oncology Center",
  },
  {
    id: "8",
    name: "Dr. Rohit Das",
    specialization: "Avian and Exotic Pets",
    clinicName: "Exotic Animal Health Center",
  },
  {
    id: "9",
    name: "Dr. Sneha Pillai",
    specialization: "Internal Medicine",
    clinicName: "Healing Paws Veterinary Hospital",
  },
  {
    id: "10",
    name: "Dr. Vikram Singh",
    specialization: "Emergency and Critical Care",
    clinicName: "24x7 Pet Emergency Clinic",
  },
];

const BookAppointment = () => {
  const { vetId } = useParams();
  const navigate = useNavigate();

  const vet = veterinarians.find((v) => v.id === vetId);

  const [formData, setFormData] = useState({
    petName: "",
    petType: "Dog",
    date: "",
    time: "",
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      petName: formData.petName,
      petType: formData.petType,
      date: formData.date,
      time: formData.time,
      doctor: vet?.name || "Unknown",
      clinicName: vet?.clinicName || "Unknown",
      specialization: vet?.specialization || "Unknown",
      serviceType: "Veterinarian",
    };

    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    existingAppointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(existingAppointments));

    setBookingSuccess(true);

    setTimeout(() => {
      navigate("/appointments");
    }, 2000);
  };

  return (
    <div className="container-fluid p-0 d-flex">
      <Sidebar />
      <div className="container mt-5" style={{ marginLeft: "260px", maxWidth: "700px" }}>
        <h2 className="mb-4">Book Appointment</h2>

        {bookingSuccess ? (
          <div className="alert alert-success">
            Appointment booked successfully! Redirecting to appointments page...
          </div>
        ) : (
          <div className="card shadow p-4">
            <h5 className="mb-3">Veterinarian Details</h5>
            <div className="mb-2">
              <strong>Name:</strong> {vet?.name || "N/A"}
            </div>
            <div className="mb-2">
              <strong>Specialization:</strong> {vet?.specialization || "N/A"}
            </div>
            <div className="mb-4">
              <strong>Clinic:</strong> {vet?.clinicName || "N/A"}
            </div>

            <h5 className="mb-3">Pet Appointment Form</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Pet Name</label>
                <input
                  type="text"
                  name="petName"
                  className="form-control"
                  required
                  value={formData.petName}
                  onChange={handleChange}
                  placeholder="Enter your pet's name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Pet Type</label>
                <select
                  name="petType"
                  className="form-select"
                  value={formData.petType}
                  onChange={handleChange}
                >
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Appointment Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Appointment Time</label>
                <input
                  type="time"
                  name="time"
                  className="form-control"
                  required
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Confirm Appointment
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
