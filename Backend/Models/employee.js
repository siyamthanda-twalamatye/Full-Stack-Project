import dotenv from "dotenv";
import mongoose from 'mongoose'
dotenv.config({ path: "../config.env" });


const employeeSchema = new mongoose.Schema({
  name: String,
  surname: String,
  gender: String,
  department: String,
  salary: Number,
});

let Employee = mongoose.model('Employee', employeeSchema);

export default Employee;