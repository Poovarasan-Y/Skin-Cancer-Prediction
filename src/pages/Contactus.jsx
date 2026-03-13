import React from "react";
import Menu from "./Menu";        
import Footer from "./Footer";   

function Contactus() {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <Menu />
      </div>

      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Get In Touch</h2>
          </div>

          <div className="row">
            {/* Contact Form (Left) */}
            <div className="col-md-6">
              <div className="form_container contact-form">
                <form>
                  <div className="form-row">
                    <div className="col-lg-6">
                      <div>
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <input type="text" placeholder="Phone Number" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" className="message-box" placeholder="Message" />
                  </div>
                  <div className="btn_box">
                    <button type="submit">SEND</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <div className="location_box">
                <h4>Our Hospital Location</h4>
                <p>123 Main Street, Cityville, State, 12345</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.9942303129343!2d77.80886179999999!3d12.6959447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae72137bbdf7a3%3A0xa6236ea3dc4723f7!2s12%C2%B041%2745.4%22N%2077%C2%B048%2731.9%22E!5e0!3m2!1sen!2sin!4v1708000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hospital Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contactus;
