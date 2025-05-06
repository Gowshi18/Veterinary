import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import './Veterinarian.css';
import VeterinarianAvailability from "./VeterinarianAvailability";

const veterinarians = [
  {
    name: "Dr. Meera Suresh",
    specialization: "Small Animal Surgery",
    clinicName: "Happy Paws Clinic",
    contactNumber: "+91 98765 43210",
    email: "meera@happypaws.com",
    location: "Chennai, Tamil Nadu",
    description: "Expert in orthopedic and soft tissue surgery for dogs and cats.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Rajesh Kumar",
    specialization: "Dermatology",
    clinicName: "Skin & Fur Veterinary Center",
    contactNumber: "+91 91234 56789",
    email: "rajesh@skinfurvet.com",
    location: "Bangalore, Karnataka",
    description: "Specialist in skin diseases and allergies in pets.",
    imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Dr. Anjali Nair",
    specialization: "Veterinary Oncology",
    clinicName: "Pet Cancer Care",
    contactNumber: "+91 99887 76655",
    email: "anjali@petcancercare.com",
    location: "Mumbai, Maharashtra",
    description: "Focused on cancer treatment and chemotherapy for animals.",
    imageUrl: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Dr. Vishal Reddy",
    specialization: "Internal Medicine",
    clinicName: "Healing Tails",
    contactNumber: "+91 87654 32109",
    email: "vishal@healingtails.com",
    location: "Hyderabad, Telangana",
    description: "Handling complex internal diseases with a holistic approach.",
    imageUrl: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    name: "Dr. Pooja Sharma",
    specialization: "Exotic Animal Specialist",
    clinicName: "Feather & Scales Vet",
    contactNumber: "+91 90909 80808",
    email: "pooja@featherscalesvet.com",
    location: "Pune, Maharashtra",
    description: "Treats birds, reptiles, and small exotic pets with care.",
    imageUrl: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Dr. Arvind Swaminathan",
    specialization: "Cardiology",
    clinicName: "HeartCare Vet Clinic",
    contactNumber: "+91 99876 54321",
    email: "arvind@heartcarevet.com",
    location: "Coimbatore, Tamil Nadu",
    description: "Specializes in heart conditions and diagnostics for pets.",
    imageUrl: "https://randomuser.me/api/portraits/men/90.jpg",
  },
  {
    name: "Dr. Sneha Iyer",
    specialization: "Emergency & Critical Care",
    clinicName: "LifeLine Veterinary Hospital",
    contactNumber: "+91 90000 70000",
    email: "sneha@lifelinevet.com",
    location: "Delhi",
    description: "Providing round-the-clock emergency services and ICU care.",
    imageUrl: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Dr. Karan Malhotra",
    specialization: "Orthopedics",
    clinicName: "Bone & Joint Pet Clinic",
    contactNumber: "+91 70123 45678",
    email: "karan@bonejointpets.com",
    location: "Lucknow, Uttar Pradesh",
    description: "Expert in bone fractures, joint problems and surgeries.",
    imageUrl: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Dr. Priya Menon",
    specialization: "Animal Behaviorist",
    clinicName: "Pawsitive Behavior Clinic",
    contactNumber: "+91 81234 56780",
    email: "priya@pawsitiveclinic.com",
    location: "Kochi, Kerala",
    description: "Helps in solving pet behavioral and psychological issues.",
    imageUrl: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Dr. Aditya Singh",
    specialization: "Ophthalmology",
    clinicName: "Bright Eyes Veterinary Clinic",
    contactNumber: "+91 84567 12345",
    email: "aditya@brighteyesvet.com",
    location: "Jaipur, Rajasthan",
    description: "Specialist in eye diseases, surgeries, and vision care for pets.",
    imageUrl: "https://randomuser.me/api/portraits/men/80.jpg",
  },
];

const Veterinarians = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredVets = veterinarians.filter((vet) =>
    (vet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vet.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vet.clinicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vet.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleBookAppointment = (vet) => {
    alert(`Booking appointment with ${vet.name} at ${vet.clinicName}`);
    // In future: navigate to appointment booking page with vet details
     navigate('/book-appointment');
  };

  return (
    <div className="container-fluid p-0 d-flex">
      <Sidebar />
      <div className="container mt-6 ">
        <h2 className="mb-4 text-center">Our Veterinarians</h2>

        {/* Search Bar */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <input
            type="text"
            className="form-control w-75"
            placeholder="Search by name, specialization, clinic, or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
    className="btn btn-primary"
    onClick={() => {
      const section = document.getElementById("availability-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    Check Availability
  </button>
        </div>

        <div className="list-group">
          {filteredVets.length > 0 ? (
            filteredVets.map((vet, index) => (
              <div key={index} className="veterinarian-card mb-4 p-3 shadow-sm">
                <div className="d-flex align-items-start">
                  
                  {/* Left - Veterinarian Image */}
                  <img
                    src={vet.imageUrl}
                    alt={vet.name}
                    className="rounded-circle"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />

                  {/* Center - Veterinarian Details */}
                  <div className="flex-grow-1 px-3">
                    <h5 className="mb-1">{vet.name}</h5>
                    <p className="text-muted mb-1">{vet.specialization}</p>
                    <p className="mb-2" style={{ fontSize: "14px" }}>{vet.description}</p>

                    <div className="d-flex flex-wrap mb-2">
                      <span className="badge bg-secondary me-2 mb-1">{vet.clinicName}</span>
                      <span className="badge bg-secondary me-2 mb-1">{vet.location}</span>
                    </div>

                    <div style={{ fontSize: "13px" }}>
                      <p className="mb-1"><strong>Phone:</strong> {vet.contactNumber}</p>
                      <p className="mb-0"><strong>Email:</strong> <a href={`mailto:${vet.email}`}>{vet.email}</a></p>
                    </div>
                  </div>

                  {/* Right - Book Button */}
                  <div className="text-end">
                    <p style={{ fontSize: "14px", marginBottom: "8px" }}>
                      <strong>Next Available:</strong> Today
                    </p>
                    <p style={{ fontSize: "13px", marginBottom: "12px" }}>🕒 3:00 PM - 5:00 PM</p>
                    <button
                      className="btn btn-primary mb-2 w-100"
                      onClick={() => handleBookAppointment(vet)}
                    >
                      Book Appointment
                    </button>
                    <button className="btn btn-outline-primary w-100">
                      View Profile
                    </button>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h5>No veterinarians found matching your search.</h5>
            </div>
          )}
        </div>
        <VeterinarianAvailability />
      </div>
      
    </div>
    
  );
  
};

export default Veterinarians;
