import './App.css';

import Home from './pages/Home';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookAppointment from './pages/Bookappoinment';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Patientreg from './pages/Patientreg';
import AppointmentList from './pages/Appointmentlist';
import PatientList from './pages/Patientlist';
import Diagnosis from './pages/Diagnose';

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/appointment" element={<BookAppointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/patientreg" element={<Patientreg />} />
          <Route path="/appointmentlist" element={<AppointmentList />} />
          <Route path="/patient" element={<PatientList />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

