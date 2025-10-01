import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/tables.css';

//displays a list of employees filtered by department name.
function Department() {
  const { departmentName } = useParams();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/employee')
      .then(response => {
        const filtered = response.data.filter(emp => (emp.department || '').toLowerCase() === departmentName.toLowerCase());
        setEmployees(filtered);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [departmentName]);

  return (
    <div className="container2">
      <h2>{departmentName} Department</h2>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.surname}</td>
                <td>{employee.gender}</td>
                <td>{employee.department}</td>
                <td>R {employee.salary.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Department;
