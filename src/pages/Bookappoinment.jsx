import React, { useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function BookAppointment() {
  const [mobile, setMobile] = useState("");
  const [fees, setFees] = useState("");
  const [date, setDate] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Smith", fee: 500 },
    { id: 2, name: "Dr. John", fee: 600 },
  ]);
  const [selectedDoctorId, setSelectedDoctorId] = useState(-1);

  const bookAppointment = () => {
    if (mobile) {
      setShowQR(true);
      setSuccessMsg(true);
    } else {
      alert("Please enter a valid mobile number before booking.");
    }
  };

  const fillDoctorFees = (e) => {
    const selectedId = parseInt(e.target.value);
    setSelectedDoctorId(selectedId);
    const selectedDoctor = doctors.find((doc) => doc.id === selectedId);
    setFees(selectedDoctor ? selectedDoctor.fee : "");
  };

  return (
    <div className="sub_page">
      <div className="hero_area">
        <Menu />
      </div>

      <section className="contact_section" style={{ padding: "50px" }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="heading_container">
                <h2>Book Appointment</h2>
              </div>

              <div className="form_container contact-form">
                <p>
                  Please register before booking an appointment{" "}
                  <a href="/patientreg">Register</a>
                </p>

                <div style={{ marginTop: "10px" }}>
                  <input
                    type="text"
                    placeholder="Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                <div>
                  <button onClick={() => alert("Search Patient Logic")}>
                    Search
                  </button>
                </div>

                <div>
                  <select
                    className="form-select form-select-lg mb-3"
                    style={{
                      width: "100%",
                      height: "40px",
                      marginTop: "20px",
                    }}
                    value={selectedDoctorId}
                    onChange={fillDoctorFees}
                  >
                    <option value="-1">-- Select Doctor --</option>
                    {doctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <input type="text" value={fees} disabled />
                </div>

                <div>
                  <input
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div
                  id="form-error"
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    display: "none",
                    color: "#ff0000",
                    fontSize: "18px",
                  }}
                ></div>

                <div className="btn_box">
                  <button onClick={bookAppointment}>Book Appointment</button>
                </div>
              </div>

              {showQR && (
                <div
                  id="payment-qr"
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  <h3>Scan to Pay</h3>
                  <img
                    src="/static/images/qr.png"
                    alt="QR Code for Payment"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
              )}

              {successMsg && (
                <div
                  id="success-message"
                  style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  Appointment successfully booked! Confirmation sent to your
                  mobile number.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BookAppointment;
