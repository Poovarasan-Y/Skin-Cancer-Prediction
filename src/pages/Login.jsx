import React, { useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
    } else {
      setError("");
      alert(`Logged in with Email: ${email} and Password: ${password}`);
    }
  };

  return (
    <div className="sub_page">
      <div className="hero_area">
        <Menu />
      </div>

      <section className="contact_section layout_padding">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="heading_container">
                <h2>Login</h2>
              </div>
              <div className="form_container contact-form">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  <button onClick={handleLogin}>Login</button>
                </div>

                <p style={{ marginTop: "20px" }}>
                  Don't have an account?{" "}
                  <Link to="/signup">Click Here</Link> to Signup
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

export default Login;
