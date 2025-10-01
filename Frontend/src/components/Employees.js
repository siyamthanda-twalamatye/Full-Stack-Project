import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeForm from './EmployeeForm';
import '../styles/tables.css';


function Employees() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchEmployees = () => {
    
    axios.get('http://localhost:5000/employee')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try{
        await axios.delete(`http://localhost:5000/employee/${id}`);
        fetchEmployees();
    }catch(err){
        console.error("Error deleting employee", err);
    }
  };

  const handleEdit = (employee) =>{
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleAdd = () =>{
    setEditingEmployee(null);
    setShowForm(true);
  };
  

  

  return (
    <div className="container2">
      <h2>All Employees</h2>
      {showForm && (
        <EmployeeForm
        existingEmployee={editingEmployee}
        onSave={() => {
            setShowForm(false);
            fetchEmployees();
        }}
        onCancel={() => setShowForm(false)}
        />
      )}
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Actions</th>
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
                <td>
                    <button className='edit' onClick={() => handleEdit(employee)}>Edit</button>
                    <button className='delete' onClick={() => handleDelete(employee._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleAdd} className='addEmployee'>Add New Employee</button>
    </div>
  );
}

export default Employees;
