import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import './Profile.css';
import Sidebar from "./Sidebar";

const Profile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "Adam Johnson",
    email: "adam.johnson@example.com",
    phone: "+1 234 567 8901",
    alternate: "+1 987 654 3210",
    address: "123 Pet Lane, HappyTown, PA",
    gender: "Male",
    dob: "1985-01-15",
    emergency: "Jane Johnson (+1 555 111 2222)",
    pets: 2,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updated:", formData);
    alert("Profile saved successfully!");
    navigate("/profile", { state: { updatedProfile: formData } });
  };

  const handleAddPet = () => {
    navigate("/register-pet", { state: { ownerData: formData } });
  };

  return (
    <div className="container-fluid p-0 d-flex">
      <div className="col-2 p-0">
        <Sidebar />
      </div>
      <div className="col-10 p-4 bg-white d-flex justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="card mb-4 justify-content-center" style={{ width:"600px",}}>
          <div className="card-header">
            <strong>Edit Pet Owner Profile</strong>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="alternate" className="form-label">Alternate Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    id="alternate"
                    name="alternate"
                    value={formData.alternate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="dob" className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="emergency" className="form-label">Emergency Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    id="emergency"
                    name="emergency"
                    value={formData.emergency}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mb-4 align-items-center">
                <div className="col-md-6">
                  <label htmlFor="pets" className="form-label">Number of Pets</label>
                  <input
                    type="number"
                    className="form-control"
                    id="pets"
                    name="pets"
                    min="0"
                    value={formData.pets}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 text-md-end mt-3 mt-md-0">
                  <button
                    type="button"
                    className="btn btn-dark me-2"
                    onClick={handleAddPet}
                  >
                    + Add Pet
                  </button>
                  <button type="submit" className="btn btn-dark">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
