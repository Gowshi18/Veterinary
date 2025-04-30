import { useAppointments } from "./AppointmentsContext";
import Sidebar from "./Sidebar";

const Appointments = () => {
  const { appointments, categorizeAppointments } = useAppointments();

  if (appointments.length === 0) {
    return (
      <div className="container-fluid p-0 d-flex">
        <Sidebar />
        <div className="container mt-5">
          <h4>No appointment data found.</h4>
        </div>
      </div>
    );
  }

  // Categorize appointments based on service type
  const { groomingAppointments, vaccinationAppointments } = categorizeAppointments();

  const renderAppointmentCard = (appointment, index) => (
    <div className="col-md-4" key={index}>
      <div className="card h-100 shadow-sm">
        <img
          src="https://www.barksidelodge.com/wp-content/uploads/Depositphotos_358834140_xl-2015-scaled.jpg"
          className="card-img-top"
          alt="Appointment"
          style={{ maxHeight: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title mb-3">{appointment.serviceType} Appointment</h5>
          <p><strong>Pet Name:</strong> {appointment.petName}</p>
          <p><strong>Pet Type:</strong> {appointment.petType}</p>
          {appointment.service && (
          <p><strong>Service:</strong> {appointment.service}</p>
        )}
        {appointment.vaccine && (
          <p><strong>Vaccine:</strong> {appointment.vaccine}</p>
        )}
          <p><strong>Date:</strong> {appointment.date}</p>
          <p><strong>Time:</strong> {appointment.time}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid p-0 d-flex">
      <Sidebar />
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Upcoming Appointments</h2>

        {/* Grooming Appointments Section */}
        {groomingAppointments.length > 0 && (
          <div>
            <h3 className="mb-4">Grooming Appointments</h3>
            <div className="row g-4">
              {groomingAppointments.map(renderAppointmentCard)}
            </div>
          </div>
        )}

        {/* Vaccination Appointments Section */}
        {vaccinationAppointments.length > 0 && (
          <div>
            <h3 className="mb-4">Vaccination Appointments</h3>
            <div className="row g-4">
              {vaccinationAppointments.map(renderAppointmentCard)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
