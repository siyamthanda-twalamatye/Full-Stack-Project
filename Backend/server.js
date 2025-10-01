import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import employeeRoutes from "./routes/employeeRoutes.js";
import Employee from "./models/employee.js";

dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/employee", employeeRoutes);

// MongoDB connection
mongoose.connect(process.env.ATLAS_URI)
  .then(async () => {
    console.log("✅ MongoDB connected");

    // Seed data only once
      const existing = await Employee.find();
      if (existing.length === 0) {
        const dummyEmployees = [
          { name: "John", surname: "Doe", gender: "Male", department: "Engineering", salary: 50000 },
          { name: "Jane", surname: "Smith", gender: "Female", department: "Marketing", salary: 60000 },
          { name: "Michael", surname: "Brown", gender: "Male", department: "Finance", salary: 55000 },
          { name: "Emily", surname: "Davis", gender: "Female", department: "Engineering", salary: 65000 },
          { name: "Anna", surname: "Wilson", gender: "Female", department: "Marketing", salary: 62000 },
        ];
        await Employee.deleteMany(); // clear the collection
        await Employee.insertMany(dummyEmployees);
        console.log('✅ Dummy employees reset and added to database.');
      }
   

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error", err));
