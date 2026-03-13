import { Link } from "react-router";

function Menu({ isLoggedIn, handleLogout }) {
    return (
        <header className="header_section">
            <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <Link className="navbar-brand" to="/index">
                        <span>Skin Diagnostics Center</span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/index">
                                    Home
                                </Link>
                            </li>

                            {!isLoggedIn && (
                                <>
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/departments">
                                            Departments <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/doctors">
                                            Doctors
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/appointment">
                                            Book Appointment
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">
                                            Contact Us
                                        </Link>
                                    </li>
                                </>
                            )}

                            {isLoggedIn && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/appointment-list">
                                            Appointments
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/patient-list">
                                            Patients
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/diagnose">
                                            Diagnose
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={handleLogout}>
                                            Logout
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Menu;
