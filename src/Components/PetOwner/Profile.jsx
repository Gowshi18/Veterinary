import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isEditing, setIsEditing] = useState(false);
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

  const [pets, setPets] = useState([]);

  useEffect(() => {
    if (location.state?.newPet) {
      setPets(prev => [...prev, location.state.newPet]);
      location.state.newPet = null;
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Profile Saved:", formData);
    setIsEditing(false);
  };

  const handleAddPet = () => {
    navigate("/register-pet", { state: { ownerData: formData } });
  };

  const handleEditProfile = () => {
    navigate("/edit-profile", { state: { ownerData: formData } });
  };

  const renderField = (label, name, type = "text") => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      {isEditing ? (
        <input
          type={type}
          name={name}
          className="form-control"
          value={formData[name]}
          onChange={handleChange}
        />
      ) : (
        <div className="form-control-plaintext">{formData[name]}</div>
      )}
    </div>
  );

  return (
    <div className="container-fluid p-0 d-flex">
      <Sidebar />
      <div className="p-4 w-75">
        {/* Profile Section */}
        <div className="card mb-4" style={{width: "600px", height:"700px"}}>
          <div className="card-header">
            <strong>Pet Owner Profile</strong>
          </div>
          <div className="card-body">
            <form onSubmit={handleSave}>
              <div className="row">
                <div className="col-md-6">
                  {renderField("Name", "name")}
                  {renderField("Phone Number", "phone")}
                  {renderField("Address", "address")}
                  {renderField("Date of Birth", "dob", "date")}
                </div>
                <div className="col-md-6">
                  {renderField("Email", "email", "email")}
                  {renderField("Alternate Contact", "alternate")}
                  {renderField("Gender", "gender")}
                  {renderField("Emergency Contact", "emergency")}
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  {renderField("Number of Pets", "pets", "number")}
                </div>
                <div className="col-md-6 text-center">
                  {!isEditing ? (
                    <button type="button" className="btn btn-primary" onClick={handleEditProfile}>
                      Edit
                    </button>
                  ) : (
                    <>
                      <button type="submit" className="btn btn-primary me-2">
                        Save Changes
                      </button>
                      <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Pet List Section */}
        <div className="p-4 w-75">
          <h5>Registered Pets</h5>
          <button className="btn btn-success" onClick={handleAddPet}>+ Add Pet</button>
        </div>

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
  );
};

export default Profile;
