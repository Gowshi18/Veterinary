import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import './Profile.css';
import './Theme.css';

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData] = useState({
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

  const [pets, setPets] = useState([]);

  useEffect(() => {
    if (location.state?.newPet) {
      setPets(prev => [...prev, location.state.newPet]);
      location.state.newPet = null;
    }
  }, [location.state]);

  const handleAddPet = () => {
    navigate("/register-pet", { state: { ownerData: formData } });
  };

  const handleEditProfile = () => {
    navigate("/edit-profile", { state: { ownerData: formData } });
  };

  return (
    <div className="container-fluid p-0 d-flex">
      <Sidebar />
      <div className="p-4 w-75">
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <strong>Pet Owner Profile</strong>
            <div>
              <button className="btn btn-dark me-2" onClick={handleAddPet}>+ Add Pet</button>
              <button className="btn btn-dark" onClick={handleEditProfile}>Edit Profile</button>
            </div>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-6"><strong>Name:</strong> {formData.name}</div>
              <div className="col-md-6"><strong>Email:</strong> {formData.email}</div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6"><strong>Phone:</strong> {formData.phone}</div>
              <div className="col-md-6"><strong>Alternate:</strong> {formData.alternate}</div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6"><strong>Address:</strong> {formData.address}</div>
              <div className="col-md-6"><strong>Gender:</strong> {formData.gender}</div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6"><strong>Date of Birth:</strong> {formData.dob}</div>
              <div className="col-md-6"><strong>Emergency Contact:</strong> {formData.emergency}</div>
            </div>
            <div className="row">
              <div className="col-md-6"><strong>Number of Pets:</strong> {formData.pets}</div>
            </div>
          </div>
        </div>

        {/* Pet List */}
        <div className="mt-4">
          <h5>Registered Pets</h5>
          <div className="row">
            {pets.map((pet, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img
                    src={pet.petImage || "https://via.placeholder.com/150"}
                    className="card-img-top"
                    alt={pet.petName}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pet.petName}</h5>
                    <p className="card-text">Type: {pet.petType}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
