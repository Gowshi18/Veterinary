
import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  ToggleButton,
  Form,
  InputGroup,
  Dropdown,
  Modal,
  Card,
} from "react-bootstrap";
import {
  BsList,
  BsGrid,
  BsFilter,
  BsThreeDotsVertical,
  BsPlusLg,
} from "react-icons/bs";

import Charlie from '../../../assets/Charlie.jpg';
import Coco from '../../../assets/Coco.jpg';
import Luna from '../../../assets/Luna.jpg';
import Max from '../../../assets/Max.jpg';
import Rocky from '../../../assets/Rocky.jpg';
import Bella from '../../../assets/Bella.jpg'; 
import VetLayout from "./VetLayout";

const records = [
  {
    id: 1,
    petName: "Max",
    species: "Dog, Golden Retriever",
    owner: "John Doe",
    summary: "Annual wellness exam - all vitals normal",
    date: "Apr 15, 2025",
    vet: "Dr. Smith",
    documents: 2,
    type: "Examination",
    image: Max,
  },
  {
    id: 2,
    petName: "Bella",
    species: "Cat, Siamese",
    owner: "Sarah Johnson",
    summary: "Rabies and FVRCP vaccines administered",
    date: "Apr 12, 2025",
    vet: "Dr. Wilson",
    documents: 1,
    type: "Vaccination",
    image: Bella,
  },
  {
    id: 3,
    petName: "Charlie",
    species: "Dog, Beagle",
    owner: "Mike Wilson",
    summary: "Skin condition treatment - prescribed antibiotics",
    date: "Apr 10, 2025",
    vet: "Dr. Smith",
    documents: 3,
    type: "Treatment",
    image: Charlie,
  },
  {
    id: 4,
    petName: "Luna",
    species: "Cat, Maine Coon",
    owner: "Emily Parker",
    summary: "Dental cleaning and extraction of two molars",
    date: "Apr 8, 2025",
    vet: "Dr. Johnson",
    documents: 5,
    type: "Surgery",
    image: Luna,
  },
  {
    id: 5,
    petName: "Rocky",
    species: "Dog, German Shepherd",
    owner: "David Miller",
    summary:
      "Limping in right hind leg - prescribed rest and anti-inflammatories",
    date: "Apr 5, 2025",
    vet: "Dr. Wilson",
    documents: 2,
    type: "Examination",
    image: Rocky,
  },
  {
    id: 6,
    petName: "Coco",
    species: "Rabbit, Holland Lop",
    owner: "Jessica Lee",
    summary: "Routine checkup - all parameters normal",
    date: "Apr 3, 2025",
    vet: "Dr. Smith",
    documents: 1,
    type: "Examination",
    image: Coco,
  },
  
];

const NewRecordModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>New Health Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* (form content unchanged) */}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const HealthRecords = () => {
  const [view, setView] = useState("list");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container-fluid p-0 d-flex">
              <VetLayout />
    <div className="container-fluid my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="fw-bold">Health Records</h2>
          <p className="text-muted mb-0">Manage and view all pet health records</p>
        </div>
        <Button variant="dark" onClick={() => setShowModal(true)}>
          <BsPlusLg className="me-2" /> New Record
        </Button>
      </div>

      <div className="bg-white p-4 rounded shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h5 className="fw-bold mb-1">Health Records</h5>
            <p className="text-muted mb-0">View and manage all pet health records.</p>
          </div>
          <div className="d-flex gap-2">
            <InputGroup>
              <Form.Control placeholder="Search records by pet, owner, or keywords..." />
            </InputGroup>
            <Button variant="light">
              <BsFilter className="me-1" /> Filter
            </Button>
          </div>
        </div>

        <div className="d-flex justify-content-start mb-3">
          <ButtonGroup>
            <ToggleButton
              id="list-view"
              type="radio"
              variant="outline-secondary"
              name="view"
              value="list"
              checked={view === "list"}
              onChange={(e) => setView(e.currentTarget.value)}
            >
              <BsList className="me-2" /> List View
            </ToggleButton>
            <ToggleButton
              id="grid-view"
              type="radio"
              variant="outline-secondary"
              name="view"
              value="grid"
              checked={view === "grid"}
              onChange={(e) => setView(e.currentTarget.value)}
            >
              <BsGrid className="me-2" /> Grid View
            </ToggleButton>
          </ButtonGroup>
        </div>

        <div className="text-muted mb-2">{records.length} records</div>

        {view === "list" ? (
          <div className="border rounded">
            {records.map((record) => (
              <div
                key={record.id}
                className="d-flex justify-content-between align-items-center border-bottom p-3"
              >
                <div className="d-flex align-items-center w-25">
                  <img
                    src={record.image}
                    alt={record.petName}
                    className="rounded-circle me-3"
                    style={{ width: 50, height: 50, objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="mb-0">{record.petName}</h6>
                    <small>{record.species}</small><br />
                    <small>Owner: {record.owner}</small>
                  </div>
                </div>
                <div className="w-50">
                  <strong>Summary:</strong>
                  <div className="text-muted small">{record.summary}</div>
                </div>
                <div className="text-end w-25">
                  <div className="small"><strong>Date:</strong> {record.date}</div>
                  <div className="small"><strong>Vet:</strong> {record.vet}</div>
                  <div className="small"><strong>Docs:</strong> {record.documents}</div>
                  <span className="badge bg-light text-dark border fw-normal mt-2">
                    {record.type}
                  </span>
                </div>
                <div className="ms-3">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" size="sm">
                      <BsThreeDotsVertical />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>View</Dropdown.Item>
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="d-flex flex-wrap">
            {records.map((record) => (
              <Card key={record.id} className="m-2 p-3" style={{ width: "18rem" }}>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={record.image}
                    alt={record.petName}
                    className="rounded-circle me-3"
                    style={{ width: 50, height: 50, objectFit: "cover" }}
                  />
                  <div>
                    <h5 className="mb-0">{record.petName}</h5>
                    <small className="text-muted">{record.species}</small>
                  </div>
                </div>
                <div className="mb-2">
                  <strong>Owner:</strong> {record.owner}
                </div>
                <div className="mb-2">
                  <strong>Summary:</strong>
                  <div className="text-muted small">{record.summary}</div>
                </div>
                <div className="mb-2">
                  <strong>Date:</strong> {record.date}<br />
                  <strong>Vet:</strong> {record.vet}<br />
                  <strong>Documents:</strong> {record.documents}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-light text-dark border fw-normal">
                    {record.type}
                  </span>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" size="sm">
                      <BsThreeDotsVertical />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>View</Dropdown.Item>
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <NewRecordModal show={showModal} onHide={() => setShowModal(false)} />
    </div>
    </div>
  );
};

export default HealthRecords;
