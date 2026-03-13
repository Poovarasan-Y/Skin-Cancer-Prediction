import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import "../App.css";

const AppointmentList = ({ appointmentList }) => {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <Menu />
      </div>

      <section className="contact_section" style={{ padding: "50px", height: "500px" }}>
        <div className="container">
          <div className="form_container" style={{ margin: "20px 0 20px -16px", padding: "0px" }}></div>

          <div className="row d-flex justify-content-center">
            <table className="table table-striped" style={{ border: "1px solid #dddddd" }}>
              <thead>
                <tr>
                  <th scope="col">Token No</th>
                  <th scope="col">Name</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Mobile</th>
                </tr>
              </thead>
              <tbody>
                {appointmentList && appointmentList.length > 0 ? (
                  appointmentList.map((row, index) => (
                    <tr key={row.mobile}>
                      <td>
                        <a href={`patient-detail?mobile=${row.mobile}`}>Token {index + 1}</a>
                      </td>
                      <td>{row.name}</td>
                      <td>{row.dob}</td>
                      <td>{row.mobile}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center" }}>
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppointmentList;
