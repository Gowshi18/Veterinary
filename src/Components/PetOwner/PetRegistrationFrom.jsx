import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './PetRegistrationForm.css';
import Sidebar from "./Sidebar";

const PetRegistrationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ownerProfile = location.state?.ownerData;

  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    breed: "",
    dob: "",
    gender: "",
    weight: "",
    color: "",
    petImage: "",
    medicalConditions: "",
    allergies: "",
    vaccinated: false,
    neutered: false,
    ownerName: "",
    email: "",
    phone: "",
    userId: "" // Added to link with backend UserProfile
  });

  useEffect(() => {
    if (ownerProfile) {
      setFormData(prev => ({
        ...prev,
        ownerName: ownerProfile.name,
        email: ownerProfile.email,
        phone: ownerProfile.phone,
        userId: ownerProfile.id // Set userId
      }));
    }
  }, [ownerProfile]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Pet registered successfully!");
        navigate("/profile", { state: { newPet: formData } });
      } else {
        alert("Failed to register pet.");
      }
    } catch (error) {
      console.error("Error registering pet:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="container-fluid p-0 d-flex">
      <Sidebar />
      <div className="container py-5">
        <div className="card p-4 shadow-sm">
          <h2 className="text-center mb-3">Pet Registration</h2>
          <p className="text-muted">Register your pet by filling out the information below.</p>
          <form onSubmit={handleSubmit}>
            <h5 className="mt-4">Pet Information</h5>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label className="form-label">Pet Name*</label>
                <input type="text" className="form-control" name="petName" value={formData.petName} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Pet Type*</label>
                <select className="form-select" name="petType" value={formData.petType} onChange={handleChange} required>
                  <option value="">Select pet type</option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Bird</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label className="form-label">Breed*</label>
                <input type="text" className="form-control" name="breed" value={formData.breed} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Birth*</label>
                <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label className="form-label">Gender*</label>
                <select className="form-select" name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Weight (kg)*</label>
                <input type="number" className="form-control" name="weight" value={formData.weight} onChange={handleChange} required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label className="form-label">Color/Markings*</label>
                <input type="text" className="form-control" name="color" value={formData.color} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Upload Pet Image*</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  required
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData((prev) => ({ ...prev, petImage: reader.result }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Medical Conditions</label>
              <textarea className="form-control" rows="2" name="medicalConditions" value={formData.medicalConditions} onChange={handleChange}></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Allergies</label>
              <textarea className="form-control" rows="2" name="allergies" value={formData.allergies} onChange={handleChange}></textarea>
            </div>

            <div className="row mb-4">
              <div className="col-md-6 mb-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="vaccinated" checked={formData.vaccinated} onChange={handleChange} />
                  <label className="form-check-label">Vaccinated</label>
                </div>
                <small className="text-muted">Is your pet up to date with vaccinations?</small>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="neutered" checked={formData.neutered} onChange={handleChange} />
                  <label className="form-check-label">Neutered/Spayed</label>
                </div>
                <small className="text-muted">Has your pet been neutered or spayed?</small>
              </div>
            </div>

            <h5 className="mt-4">Owner Information</h5>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label className="form-label">Owner Name*</label>
                <input type="text" className="form-control" name="ownerName" value={formData.ownerName} onChange={handleChange} readOnly />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Email*</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} readOnly />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number*</label>
                <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} readOnly />
              </div>
            </div>

            <button type="submit" className="btn btn-dark w-100">Register Pet</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PetRegistrationForm;
