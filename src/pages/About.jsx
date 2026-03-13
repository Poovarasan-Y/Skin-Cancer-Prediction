import React from "react";
import Menu from "./Menu"; 
import Footer from "./Footer";

function About() {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <Menu />
      </div>

      {/* About Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="/images/about-img.jpg" alt="About Us" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About <span>Us</span>
                  </h2>
                </div>

                <p className="text-justify">
                  At Radiant Skin Clinic we are committed to providing accurate, reliable, and
                  professional skin health assessments. With the advancement of medical technology, there are
                  numerous diagnostic tools available, but precision and trust remain paramount. That’s why we
                  leverage cutting-edge AI-driven deep learning models and state-of-the-art imaging techniques to
                  detect and analyze skin conditions with exceptional accuracy.
                </p>

                <p className="text-justify">
                  Our team of experienced dermatologists and technology experts work together to ensure that every
                  diagnosis is comprehensive, fast, and dependable. Whether you are concerned about a specific
                  skin condition or seeking a preventive checkup, we provide early detection solutions that can
                  make all the difference in effective treatment and care.
                </p>

                <p className="text-justify">
                  At Radiant Skin Clinic, your skin health is our priority. We strive to empower individuals with
                  clear, precise, and science-backed reports, allowing you to make informed decisions about your
                  well-being. Trust us for a professional and compassionate approach to skin diagnosis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default About;
