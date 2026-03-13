import React from "react";

import { Link } from "react-router";

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-6 col-lg-3 footer_col">
            <div className="footer_contact">
              <h4>Reach at..</h4>
              <div className="contact_link_box">
                <a href="#">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a href="tel:+011234567890">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="mailto:demo@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="footer_social">
              <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* About */}
          <div className="col-md-6 col-lg-3 footer_col">
            <div className="footer_detail">
              <h4>About</h4>
              <p>
                Beatae provident nobis mollitia magnam voluptatum, unde dicta facilis minima veniam
                corporis laudantium alias tenetur eveniet illum reprehenderit fugit a delectus officiis
                blanditiis ea.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-6 col-lg-2 mx-auto footer_col">
            <div className="footer_link_box">
              <h4>Links</h4>
              <div className="footer_links">
                <Link to="/index">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/departments">Departments</Link>
                <Link to="/doctors">Doctors</Link>
                <Link to="/contact" className="active">Contact Us</Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-6 col-lg-3 footer_col">
            <h4>Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Info */}
        <div className="footer-info">
          <p>
            &copy; {currentYear} All Rights Reserved By{" "}
            <a href="https://html.design/" target="_blank" rel="noopener noreferrer">
              Free Html Templates
            </a>
            <br />
            &copy; {currentYear} Distributed By{" "}
            <a href="https://themewagon.com/" target="_blank" rel="noopener noreferrer">
              ThemeWagon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
