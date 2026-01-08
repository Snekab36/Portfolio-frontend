🌐 Personal Portfolio Web Application (MERN Stack)
📌 Project Overview

This project is a Personal Portfolio Web Application developed as the Final Assignment for the Full Stack Program.
The application showcases personal information, skills, projects, and contact details using the MERN Stack.

The system includes:

A responsive React frontend styled with Tailwind CSS

A Node.js & Express.js backend

MongoDB for data storage

RESTful APIs for project data and contact form submissions

🛠️ Tech Stack

Frontend

React.js

Tailwind CSS

React Router DOM

Axios

Backend

Node.js

Express.js

MongoDB

Mongoose

CORS

dotenv

✨ Features
Frontend

Home page with introduction and avatar

About page with skills and background

Projects page with dynamic project listing

Contact page with contact form

Responsive UI using Tailwind CSS

Client-side routing using React Router

Backend

REST API using Express.js

MongoDB database integration

Contact form data stored in MongoDB

Project data retrieved from database
📄 Pages Description
🏠 Home

Welcome message

Professional avatar

Navigation links

👤 About

Personal biography

Skills and expertise

Educational background

💼 Projects

List of projects fetched from MongoDB

Project descriptions

GitHub repository links

📬 Contact

Contact form (Name, Email, Message)

Form submissions stored in MongoDB

Social profile links (can be extended)

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/portfolio-mern.git
cd portfolio-mern

2️⃣ Backend Setup
cd server
npm install


Create .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Start backend:

node server.js

3️⃣ Frontend Setup
cd client
npm install
npm run dev

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/projects	Fetch all projects
POST	/api/contact	Submit contact form
🚀 Deployment

Frontend: Vercel / Netlify

Backend: Render / Railway

Database: MongoDB Atlas

📸 Screenshots

(Add screenshots of Home, About, Projects, and Contact pages here)

📜 Assignment Compliance

✔ React Frontend
✔ Tailwind CSS Styling
✔ Node.js & Express Backend
✔ MongoDB Integration
✔ REST APIs
✔ Contact Form with Database Storage
✔ Fully Functional Portfolio Website

👨‍💻 Author

Name: sneha
Course: Full Stack Development Program
