import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Employees from './components/Employees';
import Department from './components/Departments';
import './styles/Department.css'
import './styles/Employees.css'
import './styles/tables.css'
import './styles/globel.css'


function App() {
  return (
    // Set up the main router for handling navigation
    <Router>
      <div>
        <nav>
          <nav className='links'>
            <Link to="/" className='home'>Home</Link>
            <Link to="/employees" className='allEmployees'>All Employees</Link>
            <Link to="/department/Engineering" className='engineering'>Engineering</Link>
            <Link to="/department/Marketing" className='marketing'>Marketing</Link>
            <Link to="/department/Finance" className='finance'>Finance</Link>
          </nav>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/department/:departmentName" element={<Department />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
