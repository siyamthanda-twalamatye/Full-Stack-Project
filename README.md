# Full-Stack-Project
Overview

This project allows users to:

- View all employees.
- Filter employees by department.
- Add new employees.
- Update existing employee details.
- Delete employees.

Technologies Used

 Backend:
- Node.js – JavaScript runtime
- Express.js – Web framework for Node.js
- MongoDB – NoSQL database
- Mongoose – MongoDB object modeling tool
- dotenv – Environment variable management
- CORS – Cross-Origin Resource Sharing middleware

 Frontend:
- React.js – JavaScript library for building user interfaces
- React Router DOM v6 – Routing for React
- Axios – Promise-based HTTP client

Getting Started

Pre-requisites

- Node.js and npm installed
- MongoDB Atlas or local MongoDB server


Installation process

1.Backend terminal Setup:

cd backend
npm install

Frontend terminal Setup:
cd ../frontend
npm install


Testing if it works:

for the Backend terminal:
 node server.js
 visit: http://localhost:5000/employee

You should see a JSON list of employees.

for Frontend terminal:
npm start

The application should open in the browser and display employees with their departments and salaries.
