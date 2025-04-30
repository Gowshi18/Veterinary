import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import { useNavigate } from "react-router-dom";


const allVaccinations = [
  // === DOGS ===
  {
    name: "Rabies Vaccine",
    description: "Protects against the deadly rabies virus.",
    frequency: "Annual",
    petType: "Dog",
    image: "https://www.merck-animal-health-usa.com/wp-content/uploads/sites/54/2021/01/Nobivac-1-RABIES-resource-image-770x455-1.png",
    recommended: true,
  },
  {
    name: "DHPP",
    description: "Protects from Distemper, Hepatitis, Parainfluenza, Parvovirus.",
    frequency: "Every 3 years",
    petType: "Dog",
    image: "https://animeal.in/cdn/shop/files/I02102_1.webp?v=1711114691&width=1920",
    recommended: true,
  },
  {
    name: "Leptospirosis",
    description: "Prevents bacterial disease that can affect kidneys and liver.",
    frequency: "Annual",
    petType: "Dog",
    image: "https://www.msd-animal-health.co.in/wp-content/uploads/sites/33/2020/02/Nobivac-Lepto.png?w=558&h=440&crop=1",
    recommended: false,
  },
  // {
  //   name: "Bordetella",
  //   description: "Protects against kennel cough.",
  //   frequency: "Annual",
  //   petType: "Dog",
  //   image: "https://via.placeholder.com/300x150?text=Bordetella",
  //   recommended: true,
  // },
  // {
  //   name: "Canine Influenza",
  //   description: "Guards against dog flu strains H3N2 and H3N8.",
  //   frequency: "Annual",
  //   petType: "Dog",
  //   image: "https://via.placeholder.com/300x150?text=Influenza",
  //   recommended: false,
  // },
  // {
  //   name: "Lyme Disease",
  //   description: "Prevents tick-borne Lyme disease.",
  //   frequency: "Annual",
  //   petType: "Dog",
  //   image: "https://via.placeholder.com/300x150?text=Lyme",
  //   recommended: true,
  // },
  // {
  //   name: "Corona Virus Vaccine",
  //   description: "Prevents coronavirus in dogs (not COVID-19).",
  //   frequency: "Annual",
  //   petType: "Dog",
  //   image: "https://via.placeholder.com/300x150?text=Coronavirus",
  //   recommended: false,
  // },
  // {
  //   name: "Parvovirus Booster",
  //   description: "Additional protection against Parvo.",
  //   frequency: "Annual",
  //   petType: "Dog",
  //   image: "https://via.placeholder.com/300x150?text=Parvovirus",
  //   recommended: false,
  // },
  // {
  //   name: "Hepatitis Booster",
  //   description: "Boosts immunity against hepatitis.",
  //   frequency: "Every 3 years",
  //   petType: "Dog",
  //   image: "https://via.placeholder.com/300x150?text=Hepatitis",
  //   recommended: false,
  // },
  // {
  //   name: "Puppy Series Combo",
  //   description: "For puppies: core combo protection.",
  //   frequency: "Series (6-16 weeks)",
  //   petType: "Dog",
  //   image: "https://via.placeholder.com/300x150?text=Puppy+Combo",
  //   recommended: true,
  // },

  // // === CATS ===
  // {
  //   name: "FVRCP",
  //   description: "Protects against Rhinotracheitis, Calicivirus, Panleukopenia.",
  //   frequency: "Every 3 years",
  //   petType: "Cat",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeadUP1kXIEAEclkvOXBBdYdzdVBRUAOJ7n8Tk6PrjP4lyeWiuhv-HjMI3DhJSGHmiL0U&usqp=CAU",
  //   recommended: true,
  // },
  // {
  //   name: "Rabies (Feline)",
  //   description: "Protects cats from rabies virus.",
  //   frequency: "Annual",
  //   petType: "Cat",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeadUP1kXIEAEclkvOXBBdYdzdVBRUAOJ7n8Tk6PrjP4lyeWiuhv-HjMI3DhJSGHmiL0U&usqp=CAU",
  //   recommended: true,
  // },
  // {
  //   name: "Feline Leukemia (FeLV)",
  //   description: "Prevents feline leukemia virus infection.",
  //   frequency: "Annual",
  //   petType: "Cat",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeadUP1kXIEAEclkvOXBBdYdzdVBRUAOJ7n8Tk6PrjP4lyeWiuhv-HjMI3DhJSGHmiL0U&usqp=CAU",
  //   recommended: true,
  // },
  // {
  //   name: "Feline Immunodeficiency",
  //   description: "Protection against FIV.",
  //   frequency: "Annual",
  //   petType: "Cat",
  //   image: "https://via.placeholder.com/300x150?text=FIV",
  //   recommended: false,
  // },
  // {
  //   name: "Chlamydia Vaccine",
  //   description: "Prevents feline chlamydia infections.",
  //   frequency: "Every 3 years",
  //   petType: "Cat",
  //   image: "https://via.placeholder.com/300x150?text=Chlamydia",
  //   recommended: false,
  // },
  // {
  //   name: "Calicivirus Booster",
  //   description: "Boosts immunity against calicivirus.",
  //   frequency: "Annual",
  //   petType: "Cat",
  //   image: "https://via.placeholder.com/300x150?text=Calicivirus",
  //   recommended: false,
  // },
  // {
  //   name: "Panleukopenia Booster",
  //   description: "Reinforces defense against feline distemper.",
  //   frequency: "Annual",
  //   petType: "Cat",
  //   image: "https://via.placeholder.com/300x150?text=Panleukopenia",
  //   recommended: false,
  // },
  // {
  //   name: "Feline Pneumonitis",
  //   description: "Protects from respiratory infections.",
  //   frequency: "Annual",
  //   petType: "Cat",
  //   image: "https://via.placeholder.com/300x150?text=Pneumonitis",
  //   recommended: false,
  // },
  // {
  //   name: "Ringworm Vaccine",
  //   description: "Prevents fungal ringworm in high-risk areas.",
  //   frequency: "Annual",
  //   petType: "Cat",
  //   image: "https://via.placeholder.com/300x150?text=Ringworm",
  //   recommended: false,
  // },
  // {
  //   name: "Kitten Combo",
  //   description: "Core vaccinations for kittens.",
  //   frequency: "Series (6-16 weeks)",
  //   petType: "Cat",
  //   image: "https://via.placeholder.com/300x150?text=Kitten+Combo",
  //   recommended: true,
  // },

  // // === BIRDS ===
  // {
  //   name: "Polyomavirus",
  //   description: "Protects against polyomavirus in young birds.",
  //   frequency: "Annual",
  //   petType: "Bird",
  //   image: "https://via.placeholder.com/300x150?text=Polyomavirus",
  //   recommended: true,
  // },
  // {
  //   name: "Psittacosis",
  //   description: "Prevents Chlamydia psittaci infection.",
  //   frequency: "Every 2 years",
  //   petType: "Bird",
  //   image: "https://via.placeholder.com/300x150?text=Psittacosis",
  //   recommended: true,
  // },
  // {
  //   name: "Poxvirus Vaccine",
  //   description: "Prevents avian pox in birds.",
  //   frequency: "Every 3 years",
  //   petType: "Bird",
  //   image: "https://via.placeholder.com/300x150?text=Poxvirus",
  //   recommended: false,
  // },
  // {
  //   name: "Newcastle Disease",
  //   description: "Prevents serious respiratory disease.",
  //   frequency: "Annual",
  //   petType: "Bird",
  //   image: "https://via.placeholder.com/300x150?text=Newcastle",
  //   recommended: false,
  // },
  // {
  //   name: "Avian Influenza",
  //   description: "Guards birds against flu strains.",
  //   frequency: "Every 2 years",
  //   petType: "Bird",
  //   image: "https://via.placeholder.com/300x150?text=Avian+Flu",
  //   recommended: false,
  // },
  // {
  //   name: "Aspergillosis",
  //   description: "Prevents fungal respiratory issues.",
  //   frequency: "Annual",
  //   petType: "Bird",
  //   image: "https://via.placeholder.com/300x150?text=Aspergillosis",
  //   recommended: false,
  // },
  // {
  //   name: "Candidiasis",
  //   description: "Protects against yeast infections.",
  //   frequency: "Annual",
  //   petType: "Bird",
  //   image: "https://via.placeholder.com/300x150?text=Candidiasis",
  //   recommended: false,
  // },
  // {
  //   name: "Mycobacterium Avium",
  //   description: "Guards birds from avian tuberculosis.",
  //   frequency: "Every 3 years",
  //   petType: "Bird",
  //   image: "https://via.placeholder.com/300x150?text=Mycobacterium",
  //   recommended: false,
  // },
  // {
  //   name: "Bird Hepatitis",
  //   description: "Prevents avian liver diseases.",
  //   frequency: "Annual",
  //   petType: "Bird",
  //   image: "https://via.placeholder.com/300x150?text=Bird+Hepatitis",
  //   recommended: false,
  // },
  // {
  //   name: "Exotic Bird Booster",
  //   description: "Combo vaccine for exotic pet birds.",
  //   frequency: "Annual",
  //   petType: "Bird",
  //   image: "https://via.placeholder.com/300x150?text=Exotic+Bird+Booster",
  //   recommended: true,
  // },

  // // === RABBITS ===
  // {
  //   name: "Myxomatosis",
  //   description: "Protects against Myxomatosis virus.",
  //   frequency: "Annual",
  //   petType: "Rabbit",
  //   image: "https://via.placeholder.com/300x150?text=Myxomatosis",
  //   recommended: true,
  // },
  // {
  //   name: "Rabbit Hemorrhagic Disease (RHDV1)",
  //   description: "Guards against deadly viral disease RHDV1.",
  //   frequency: "Annual",
  //   petType: "Rabbit",
  //   image: "https://via.placeholder.com/300x150?text=RHDV1",
  //   recommended: true,
  // },
  // {
  //   name: "Rabbit Hemorrhagic Disease (RHDV2)",
  //   description: "Protects from the newer strain RHDV2.",
  //   frequency: "Annual",
  //   petType: "Rabbit",
  //   image: "https://via.placeholder.com/300x150?text=RHDV2",
  //   recommended: true,
  // },
  // {
  //   name: "Pasteurella Vaccine",
  //   description: "Prevents respiratory infections.",
  //   frequency: "Annual",
  //   petType: "Rabbit",
  //   image: "https://via.placeholder.com/300x150?text=Pasteurella",
  //   recommended: false,
  // },
  // {
  //   name: "E. cuniculi Vaccine",
  //   description: "Prevents Encephalitozoon cuniculi infection.",
  //   frequency: "Annual",
  //   petType: "Rabbit",
  //   image: "https://via.placeholder.com/300x150?text=E.cuniculi",
  //   recommended: false,
  // },
  // {
  //   name: "Tularemia Vaccine",
  //   description: "Guards against rabbit fever (Francisella tularensis).",
  //   frequency: "Annual",
  //   petType: "Rabbit",
  //   image: "https://via.placeholder.com/300x150?text=Tularemia",
  //   recommended: false,
  // },
  // {
  //   name: "Clostridium spiroforme",
  //   description: "Prevents enterotoxemia in rabbits.",
  //   frequency: "Annual",
  //   petType: "Rabbit",
  //   image: "https://via.placeholder.com/300x150?text=Clostridium",
  //   recommended: false,
  // },
  // {
  //   name: "Coccidiosis Vaccine",
  //   description: "Prevents intestinal parasite infections.",
  //   frequency: "Annual",
  //   petType: "Rabbit",
  //   image: "https://via.placeholder.com/300x150?text=Coccidiosis",
  //   recommended: false,
  // },
  // {
  //   name: "Fur Mite Prevention",
  //   description: "Protects against fur mites.",
  //   frequency: "Annual",
  //   petType: "Rabbit",
  //   image: "https://via.placeholder.com/300x150?text=Fur+Mites",
  //   recommended: false,
  // },
  // {
  //   name: "Rabbit Combo Booster",
  //   description: "Combined Myxo & RHD vaccine.",
  //   frequency: "Annual",
  //   petType: "Rabbit",
  //   image: "https://via.placeholder.com/300x150?text=Rabbit+Combo",
  //   recommended: true,
  // }
];


const doctors = ['Dr. Smith', 'Dr. Patel', 'Dr. Jackson', 'Dr. Emily'];

const Vaccinations = () => {
  const [selectedPetType, setSelectedPetType] = useState('Dog');
  const [showModal, setShowModal] = useState(false);
  const [selectedVaccine, setSelectedVaccine] = useState(null);
  const [formData, setFormData] = useState({
    petName: '',
    date: '',
    time: '',
    doctor: '',
  });

  const filteredVaccinations = allVaccinations.filter(
    (vaccine) => vaccine.petType === selectedPetType
  );

  const navigate = useNavigate();

  const handleScheduleClick = (vaccine) => {
    setSelectedVaccine(vaccine);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const appointment = {
      ...formData,
      vaccine: selectedVaccine.name,
      petType: selectedVaccine.petType,
      serviceType: "Vaccination",
    };

    const existing = JSON.parse(localStorage.getItem('appointments')) || [];
    existing.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(existing));

    setShowModal(false);
    setFormData({ petName: '', date: '', time: '', doctor: '' });
    addAppointment(appointmentWithServiceType);
    navigate("/appointments");
  };

  return (
    <div className="container-fluid p-0 d-flex">
          <Sidebar />
    <div className="container mt-5">
      <h2 className="text-center fw-bold">Pet Vaccination Services</h2>
      <p className="text-center text-muted">Select a pet type to view relevant vaccinations</p>

      <div className="d-flex justify-content-center mb-5">
        <select
          className="form-select w-50"
          value={selectedPetType}
          onChange={(e) => setSelectedPetType(e.target.value)}
        >
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
          <option value="Bird">Birds</option>
          <option value="Rabbit">Rabbits</option>
        </select>
      </div>

      <div className="row">
        {filteredVaccinations.map((vaccine, index) => (
          <div className="col-md-4 d-flex justify-content-center mb-4" key={index}>
            <div className="card h-85 shadow-sm p-2" style={{ maxWidth: '18rem', width: '100%', margin: '5px' }}>
              {vaccine.image && (
                <img
                src={vaccine.image}
                className="card-img-top"
                alt={vaccine.name}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              
              )}
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between align-items-center">
                  {vaccine.name}
                  {vaccine.recommended && (
                    <span className="badge bg-success">Recommended</span>
                  )}
                </h5>
                <p className="card-text">{vaccine.description}</p>
                <p className="card-text"><strong>Frequency:</strong> {vaccine.frequency}</p>
                <p className="card-text"><strong>Pet Type:</strong> {vaccine.petType}</p>
                <button
                  className="btn btn-dark w-100 mt-2"
                  onClick={() => handleScheduleClick(vaccine)}
                >
                  Schedule Vaccination
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <form className="modal-content" onSubmit={handleFormSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">Schedule Vaccination</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-1">
                  <label className="form-label">Pet Name</label>
                  <input
                    type="text"
                    name="petName"
                    className="form-control"
                    required
                    value={formData.petName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label">Pet Type</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedVaccine.petType}
                    readOnly
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label">Time</label>
                  <input
                    type="time"
                    name="time"
                    className="form-control"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label">Select Doctor</label>
                  <select
                    name="doctor"
                    className="form-select"
                    required
                    value={formData.doctor}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Doctor</option>
                    {doctors.map((doc, idx) => (
                      <option key={idx} value={doc}>{doc}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Confirm Appointment</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Vaccinations;
