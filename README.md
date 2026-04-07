🚀 User Management CRUD Application

A lightweight, full-stack User Management System built with Node.js, Express, and NeDB. This application allows users to Create, Read, Update, Delete, and Search for user records with a professional, responsive interface.


🌟 Features


Full CRUD Functionality: Add, view, edit, and remove users effortlessly.

Case-Insensitive Search: Find users by first name or last name using regular expressions.

NoSQL Local Storage: Uses NeDB to store data in a single local .db file—no external database installation required.

Professional UI: Built with Bootstrap 5 for a modern, responsive, and clean look.

Robust Validation:

Prevents empty submissions.

Ensures the Age field is a positive integer.

Duplicate Prevention: Prevents adding a user if the same First and Last name already exist in the database.



Error Handling: Server-side validation errors are communicated back to the user via frontend alerts.


🛠️ Tech Stack


Backend: Node.js, Express.js

Database: NeDB (NoSQL)

Frontend: HTML5, CSS3, JavaScript (ES6), Bootstrap 5


📂 Project Structure
my-crud-app/
├── public/
│   └── index.html     # Frontend UI & Client-side logic
├── app.js              # Express server & API routes
├── database.db         # Local NoSQL data storage (auto-generated)
├── package.json        # Project dependencies
└── README.md           # Project documentation

⚙️ Installation & Setup

Follow these steps to run the project locally:


1. Clone the repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install Dependencies

Make sure you have Node.js installed, then run:

npm install

3. Start the Server

node app.js

4. Access the App

Open your browser and visit:
http://localhost:3000


🛣️ API Endpoints

Method	Endpoint	Description
GET	/users	Retrieve all users
POST	/users	Create a new user (with duplicate check)
GET	/search	Search users via query params (?firstname=x&lastname=y)
PUT	/users/:id	Update an existing user's details
DELETE	/users/:id	Remove a user from the database

📸 Screenshots


📝 License

This project is open-source and available under the MIT License.