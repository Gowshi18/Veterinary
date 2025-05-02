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
    setFormData(prev => ({
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
      doctor: vet.name,
      clinicName: vet.clinicName,
      specialization: vet.specialization,
      serviceType: "Veterinarian", // Important! For categorization
    };

    const existingAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    existingAppointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(existingAppointments));

    setBookingSuccess(true);

    // After a small delay, navigate to appointments page
    setTimeout(() => {
      navigate("/appointments");
    }, 2000);
  };

  // if (!vet) {
  //   return (
  //     <div className="container-fluid p-0 d-flex">
  //       <Sidebar />
  //       <div className="container mt-5">
  //         <h4>Veterinarian not found.</h4>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="container-fluid p-0 d-flex">
      <Sidebar />
      <div className="container mt-5">
        <h2 className="mb-4">Book Appointment with {vet.name}</h2>

        {bookingSuccess ? (
          <div className="alert alert-success">
            Appointment booked successfully! Redirecting to appointments page...
          </div>
        ) : (
          <div className="card shadow-sm p-4">
            <p><strong>Specialization:</strong> {vet.specialization}</p>
            <p><strong>Clinic:</strong> {vet.clinicName}</p>

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
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Bird</option>
                  <option>Rabbit</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Time</label>
                <input
                  type="time"
                  name="time"
                  className="form-control"
                  required
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">Confirm Appointment</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
