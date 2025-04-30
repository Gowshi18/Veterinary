import React, { useState } from "react";
import { Button, Badge, ToggleButtonGroup, ToggleButton, Card, Form } from "react-bootstrap";
import { BsCalendar, BsClipboard } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import RecordsModal from "./RecordsModal";
import ScheduleModal from "./ScheduleModal";
import VetSidebar from "./VetSidebar";

const patientsData = [
  {
    name: "Max",
    species: "Dog, Golden Retriever",
    age: "5 years",
    owner: "John Doe",
    phone: "(555) 123-4567",
    status: "Healthy",
    lastVisit: "Apr 15, 2025",
    nextAppt: "Jul 15, 2025",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Bella",
    species: "Cat, Siamese",
    age: "3 years",
    owner: "Sarah Johnson",
    phone: "(555) 234-5678",
    status: "Treatment",
    lastVisit: "Apr 20, 2025",
    nextAppt: "May 5, 2025",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Charlie",
    species: "Dog, Beagle",
    age: "2 years",
    owner: "Mike Wilson",
    phone: "(555) 345-6789",
    status: "Follow-up",
    lastVisit: "Apr 22, 2025",
    nextAppt: "May 6, 2025",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Luna",
    species: "Cat, Maine Coon",
    age: "4 years",
    owner: "Emily Parker",
    phone: "(555) 456-7890",
    status: "Healthy",
    lastVisit: "Apr 10, 2025",
    nextAppt: "Oct 10, 2025",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Rocky",
    species: "Dog, German Shepherd",
    age: "6 years",
    owner: "David Miller",
    phone: "(555) 567-8901",
    status: "Treatment",
    lastVisit: "Apr 18, 2025",
    nextAppt: "May 2, 2025",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Coco",
    species: "Rabbit, Holland Lop",
    age: "1 year",
    owner: "Jessica Lee",
    phone: "(555) 678-9012",
    status: "Healthy",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Buddy",
    species: "Dog, Labrador Retriever",
    age: "7 years",
    owner: "Robert Brown",
    phone: "(555) 789-0123",
    status: "Healthy",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Milo",
    species: "Cat, Persian",
    age: "2 years",
    owner: "Linda Green",
    phone: "(555) 890-1234",
    status: "Treatment",
    image: "https://via.placeholder.com/50",
  },
];

const StatusBadge = ({ status }) => (
  <Badge bg="dark" className="position-absolute top-0 end-0 m-2">
    {status}
  </Badge>
);

const Patients = () => {
  const [view, setView] = useState("grid");
  const [showSchedule, setShowSchedule] = useState(false);
  const [showRecords, setShowRecords] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleOpenSchedule = (pet) => {
    setSelectedPet(pet);
    setShowSchedule(true);
  };

  const handleOpenRecords = (pet) => {
    setSelectedPet(pet);
    setShowRecords(true);
  };

  const GridCard = ({ patient }) => (
    <Card className="position-relative p-3 m-2" style={{ width: "18rem" }}>
      <StatusBadge status={patient.status} />
      <div className="d-flex align-items-center mb-2">
        <img src={patient.image} className="rounded-circle me-3" alt="avatar" width="50" height="50" />
        <div>
          <h5 className="mb-0">{patient.name}</h5>
          <small>{patient.species}</small><br />
          <small>Age: {patient.age}</small>
        </div>
      </div>
      <hr />
      <p className="mb-1">
        <strong>Owner:</strong> {patient.owner}<br />
        <small>{patient.phone}</small>
      </p>
      <div className="d-flex justify-content-between mt-3">
        <Button variant="outline-dark" size="sm" onClick={() => handleOpenRecords(patient)}>
          <BsClipboard className="me-1" /> Records
        </Button>
        <Button variant="outline-dark" size="sm" onClick={() => handleOpenSchedule(patient)}>
          <BsCalendar className="me-1" /> Schedule
        </Button>
      </div>
    </Card>
  );

  const ListItem = ({ patient }) => (
    <div className="d-flex justify-content-between align-items-center border-bottom p-3">
      <div className="d-flex align-items-center">
        <img src={patient.image} className="rounded-circle me-3" alt="avatar" width="50" height="50" />
        <div>
          <h6 className="mb-0">{patient.name}</h6>
          <small>{patient.species}</small><br />
          <small>Age: {patient.age}</small>
        </div>
      </div>
      <div>
        <strong>Owner:</strong> {patient.owner}<br />
        <small>{patient.phone}</small>
      </div>
      <div>
        <div>Last Visit: {patient.lastVisit}</div>
        <div>Next Appt: {patient.nextAppt}</div>
      </div>
      <div>
        <StatusBadge status={patient.status} />
      </div>
      <div className="d-flex flex-column ms-3">
        <Button variant="outline-dark" size="sm" className="mb-2" onClick={() => handleOpenRecords(patient)}>
          <BsClipboard />
        </Button>
        <Button variant="outline-dark" size="sm" onClick={() => handleOpenSchedule(patient)}>
          <BsCalendar />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="container-fluid p-0 d-flex">
              <VetSidebar />
    <div className="container-fluid mt-4">
      <h3>Pet Patients</h3>
      <p className="text-muted">View and manage all your pet patients.</p>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <Form.Control
          type="text"
          placeholder="Search by pet name, owner, or breed..."
          className="w-50"
        />
        <Button variant="outline-secondary" className="ms-2">Filter</Button>
      </div>

      <ToggleButtonGroup type="radio" name="view" value={view} onChange={setView} className="mb-3">
        <ToggleButton id="grid" value="grid" variant={view === "grid" ? "primary" : "light"}>
          Grid View
        </ToggleButton>
        <ToggleButton id="list" value="list" variant={view === "list" ? "primary" : "light"}>
          List View
        </ToggleButton>
      </ToggleButtonGroup>

      {view === "grid" ? (
        <div className="d-flex flex-wrap">
          {patientsData.map((patient, idx) => (
            <GridCard patient={patient} key={idx} />
          ))}
        </div>
      ) : (
        <div className="border rounded">
          {patientsData.map((patient, idx) => (
            <ListItem patient={patient} key={idx} />
          ))}
        </div>
      )}

      {selectedPet && (
        <>
          <RecordsModal show={showRecords} handleClose={() => setShowRecords(false)} pet={selectedPet} />
          <ScheduleModal show={showSchedule} handleClose={() => setShowSchedule(false)} petName={selectedPet.name} />
        </>
      )}
    </div>
    </div>
  );
};

export default Patients;
