import React, { useState } from "react";

import Menu from "./Menu";
import Footer from "./Footer";

import { Link } from "react-router";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const doSignup = () => {
        if (!name || !email || !mobile || !password || !confirmPassword) {
            setError("Please fill in all fields");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match");
        } else {
            setError("");
            alert(`Signup successful for: ${name}`);
        }
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
                                <h2>Signup</h2>
                            </div>
                            <div className="form_container contact-form">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email - it's your username"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>

                                {error && (
                                    <div
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
                                    <button onClick={doSignup}>Signup</button>
                                </div>
                                <p style={{ marginTop: "10px" }}>
                                    Already have an account? <Link to="/login">Click Here</Link> to Login
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Signup;
