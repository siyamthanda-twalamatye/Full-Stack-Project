import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/globel.css'

function EmployeeForm({ existingEmployee, onSave, onCancel }){
const [employee, setEmployee] = useState({
    name: '',
    surname: '',
    gender: '',
    department: '',
    salary: ''
});

useEffect(() => {
    if(existingEmployee) {
        setEmployee(existingEmployee);
    }
}, [existingEmployee]);

const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        if (employee._id){
            //update existing
            await axios.patch(`http://localhost:5000/employee/${employee._id}`, employee);
        } else{
            //create new
            await axios.post(`http://localhost:5000/employee`, employee);
        }
        onSave();
    } catch(err){
        console.error("Error saving employee", err);
    }
};
return(
    //form to let user add employee details
    <form onSubmit={handleSubmit} className="form-container">
        <input name='name' placeholder='Name' value={employee.name} onChange={handleChange} required/>

        <input name='surname' placeholder='Surname' value={employee.surname} onChange={handleChange} required/>

         <select
         className='dropdown'
        name="gender"
        value={employee.gender}
        onChange={handleChange}
        required
    >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
    </select>

        <select
         className='dropdown2'
        name="department"
        value={employee.department}
        onChange={handleChange}
        required
    >
        <option value="">Select Department</option>
        <option value="Engineering">Engineering</option>
        <option value="Marketing">Marketing</option>
        <option value="Finance">Finance</option>
    </select>

        <input name='salary' placeholder='Salary' value={employee.salary} onChange={handleChange} required/>

        <button type='submit'>{employee._id ? "update" : "Add"} Employee</button>
        {onCancel && <button type='button' onClick={onCancel}>Cancel</button>}
    </form>
)
}

export default EmployeeForm