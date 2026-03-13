import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { useNavigate } from "react-router";
import "../App.css";

const PatientList = ({ patientList }) => {
  const navigate = useNavigate();

  return (
    <div className="sub_page">
      <div className="hero_area">
        <Menu />
      </div>

      <section className="contact_section" style={{ padding: "50px", height: "500px" }}>
        <div className="container">
          <div className="form_container" style={{ margin: "20px 0 20px -16px", padding: "0px" }}>
            <button
              style={{ width: "100px", padding: "6px", margin: "0px" }}
              onClick={() => navigate("/patientreg")}
            >
              Register
            </button>
          </div>

          <div className="row d-flex justify-content-center">
            <table className="table table-striped" id="patientTable" style={{ border: "1px solid #dddddd" }}>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Mobile</th>
                </tr>
              </thead>
              <tbody>
                {patientList && patientList.length > 0 ? (
                  patientList.map((row) => (
                    <tr key={row.mobile}>
                      <td>
                        <a href={`/patient-detail?mobile=${row.mobile}`}>{row.name}</a>
                      </td>
                      <td>{row.dob}</td>
                      <td>{row.mobile}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" style={{ textAlign: "center" }}>
                      No patients found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PatientList;
