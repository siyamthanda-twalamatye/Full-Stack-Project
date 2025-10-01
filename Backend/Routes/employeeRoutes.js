import express from "express"
import Employee from "../models/employee.js";

//the router will be added as a middleware and will take control of the requests starting with the path / record
const router = express.Router();

//this will help get a list of all the records
router.get("/", async (req,res) => {
    try{
        const results = await Employee.find();
        res.status(200).send(results);
    } catch(err){
        console.error(err);
        res.status(500).send("Error fetching records");
    }
});
//this section will help get a single record by id
router.get("/:id", async (req, res) => {
  try {
    const result = await Employee.findById(req.params.id);
    if (!result) return res.status(404).send("Not Found");
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching record");
  }
});

//this section will help you create a record
router.post("/", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const result = await newEmployee.save();
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

//this section will help you update a record by id
router.patch("/:id", async (req, res) => {
  try {
    const result = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!result) return res.status(404).send("Not Found");
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

//this section will help delete a record
router.delete("/:id", async (req, res) => {
  try {
    const result = await Employee.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).send("Not Found");
    res.status(200).send({ message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;