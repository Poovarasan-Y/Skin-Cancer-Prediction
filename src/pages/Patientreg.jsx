import React, { useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Patientreg() {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        mobile: "",
        address: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const registerPatient = () => {
        const { name, dob, mobile, address } = formData;

        if (!name || !dob || !mobile || !address) {
            setError("Please fill all the fields.");
            return;
        }

        console.log("Patient Registered:", formData);

        setError("");
        alert("Patient Registered Successfully!");

        setFormData({ name: "", dob: "", mobile: "", address: "" });
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
                                <h2>Patient Registration</h2>
                            </div>

                            <div className="form_container contact-form">
                                <div>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        id="dob"
                                        placeholder="Date of Birth"
                                        value={formData.dob}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        id="mobile"
                                        placeholder="Mobile Number"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        id="address"
                                        placeholder="Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </div>

                                {error && (
                                    <div
                                        id="form-error"
                                        style={{
                                            marginTop: "10px",
                                            marginBottom: "10px",
                                            color: "#ff0000",
                                            fontSize: "18px",
                                        }}
                                    >
                                        {error}
                                    </div>
                                )}

                                <div className="btn_box">
                                    <button type="button" onClick={registerPatient}>
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Patientreg;
