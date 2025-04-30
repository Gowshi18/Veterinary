import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  ToggleButton,
  Form,
  InputGroup,
  Dropdown,
  Modal,
} from "react-bootstrap";
import {
  BsList,
  BsGrid,
  BsFilter,
  BsThreeDotsVertical,
  BsPlusLg,
} from "react-icons/bs";
import VetSidebar from "./VetSidebar";

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
  },
];

const NewRecordModal = ({ show, onHide }) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton>
      <Modal.Title>New Health Record</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Pet Name</Form.Label>
          <Form.Control type="text" placeholder="Enter pet name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Species & Breed</Form.Label>
          <Form.Control type="text" placeholder="e.g., Dog, Beagle" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Owner</Form.Label>
          <Form.Control type="text" placeholder="Owner name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Summary</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder="Visit summary" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Vet</Form.Label>
          <Form.Control type="text" placeholder="e.g., Dr. Smith" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Documents</Form.Label>
          <Form.Control type="number" min={0} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Visit Type</Form.Label>
          <Form.Select>
            <option>Examination</option>
            <option>Vaccination</option>
            <option>Treatment</option>
            <option>Surgery</option>
          </Form.Select>
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100">
          Save Record
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
);

const HealthRecords = () => {
  const [view, setView] = useState("list");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container-fluid p-0 d-flex">
              <VetSidebar />
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
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

        <div className={`row ${view === "grid" ? "row-cols-1 row-cols-md-2 g-4" : ""}`}>
          {records.map((record) => (
            <div
              key={record.id}
              className={
                view === "list"
                  ? "border-top py-3 d-flex justify-content-between align-items-center"
                  : "col"
              }
            >
              {view === "list" ? (
                <>
                  <div className="d-flex align-items-start gap-3 w-25">
                    <div className="bg-light rounded-circle" style={{ width: 40, height: 40 }}></div>
                    <div>
                      <strong>{record.petName}</strong>
                      <div className="text-muted small">{record.species}</div>
                      <div className="text-muted small">Owner: {record.owner}</div>
                    </div>
                  </div>
                  <div className="w-50">
                    <div className="fw-bold">Summary</div>
                    <div className="text-muted small">{record.summary}</div>
                  </div>
                  <div className="text-end w-25">
                    <div className="small">
                      <strong>Date:</strong> {record.date}
                    </div>
                    <div className="small">
                      <strong>Vet:</strong> {record.vet}
                    </div>
                    <div className="small">
                      <strong>Documents:</strong> {record.documents}
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 ms-3">
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
                </>
              ) : (
                <div className="border rounded p-3 h-100 d-flex flex-column">
                  <div className="d-flex align-items-start gap-3 mb-2">
                    <div className="bg-light rounded-circle" style={{ width: 40, height: 40 }}></div>
                    <div>
                      <strong>{record.petName}</strong>
                      <div className="text-muted small">{record.species}</div>
                      <div className="text-muted small">Owner: {record.owner}</div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="fw-bold">Summary</div>
                    <div className="text-muted small">{record.summary}</div>
                  </div>
                  <div className="small text-muted mb-2">
                    <div>
                      <strong>Date:</strong> {record.date}
                    </div>
                    <div>
                      <strong>Vet:</strong> {record.vet}
                    </div>
                    <div>
                      <strong>Documents:</strong> {record.documents}
                    </div>
                  </div>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
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
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <NewRecordModal show={showModal} onHide={() => setShowModal(false)} />
    </div>
    </div>
  );
};

export default HealthRecords;
