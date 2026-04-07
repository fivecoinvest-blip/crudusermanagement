# <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="40" height="40" /> User Management System

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Bootstrap-7952CA?style=for-the-badge&logo=bootstrap&logoColor=white" />
  <img src="https://img.shields.io/badge/NeDB-blue?style=for-the-badge" />
</p>

<p align="center">
  <strong>A lightweight, full-stack CRUD application for managing user records with a local NoSQL database.</strong>
</p>

---

### 📖 Table of Contents
- [✨ Features](#-features)
- [🚀 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Getting Started](#-getting-started)
- [🛣️ API Documentation](#-api-documentation)
- [🛡️ Validation Logic](#-validation-logic)

---

### ✨ Features
- [x] **Full CRUD**: Create, Read, Update, and Delete user profiles.
- [x] **Smart Search**: Case-insensitive searching for first and last names.
- [x] **Zero-Config DB**: Uses **NeDB**, meaning no external database installation is required.
- [x] **Responsive UI**: Fully styled with **Bootstrap 5** for all screen sizes.
- [x] **Data Integrity**: Prevents duplicate entries and invalid data types.

---

### 🚀 Tech Stack
| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | HTML5, JS, Bootstrap 5 | User Interface & Client-side logic |
| **Backend** | Node.js, Express.js | RESTful API & Server logic |
| **Database** | NeDB | Embedded NoSQL data storage |

---

### 📁 Project Structure
```bash
📦 my-crud-app
 ┣ 📂 public
 ┃ ┗ 📜 index.html    # UI & Frontend Logic
 ┣ 📜 app.js          # Server & API Logic
 ┣ 📜 database.db     # Local Data Storage (Auto-generated)
 ┣ 📜 package.json    # Dependencies
 ┗ 📜 README.md       # Documentation
```


### **⚙️ Getting Started**

1. Clone the project

```bash
git clone https://github.com/fivecoinvest-blip/crudusermanagement.git
cd crudusermanagement
```

2. Install dependencies

```bash
npm install
```

3. Run the application

```bash
node app.js
```
```bash
Visit http://localhost:3000 in your browser.
```


### **🛣️ API Documentation**

Method	Endpoint	Description	Status Code

-GET	/users	Get all users	200 OK

-POST	/users	Add new user	201 Created / 409 Conflict

-GET	/search	Filter users	200 OK

-PUT	/users/:id	Update user	200 OK

-DELETE	/users/:id	Remove user	200 OK



### **🛡️ Validation Logic**

-To ensure high data quality, the following rules are enforced:

-Presence: No field can be empty.

-Type: Age must be a positive integer.

-Uniqueness: A user cannot be added if the combination of firstname + lastname already exists.



<p align="center">
Made with ❤️ by <a href="https://github.com/fivecoinvest-blip">fivecoinvest-blip</a>
</p>



