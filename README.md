# SkillBridge AI - AI-Powered Interview Preparation Platform

A modern AI-powered career preparation platform that helps job seekers analyze resumes, evaluate job descriptions, identify skill gaps, generate interview questions, and create ATS-friendly resumes. Built with **React.js, Node.js, Express.js, MongoDB, Groq AI (LLaMA 3.3 70B), JWT Authentication, and SCSS**, SkillBridge AI provides an intelligent and personalized interview preparation experience.

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Groq_AI-FF6B35?style=for-the-badge" alt="Groq AI" />
</p>

---

## Overview

SkillBridge AI is an intelligent interview preparation platform designed to help candidates maximize their chances of landing their dream jobs. Users can upload their resumes and paste job descriptions to receive AI-generated insights, personalized preparation plans, interview questions, ATS-optimized resumes, and skill-gap analysis.

The platform leverages **Groq's LLaMA 3.3 70B model** to deliver accurate and actionable career guidance within seconds.

## Features

### Resume & Job Analysis

* Upload resumes in PDF format
* Analyze resumes against job descriptions
* Calculate profile match percentage
* Identify strengths and weaknesses

### AI Interview Preparation

* Generate role-specific interview questions
* Receive detailed model answers
* Prepare for technical and behavioral interviews
* Improve confidence with personalized practice

### Skill Gap Analysis

* Detect missing skills and qualifications
* Categorize gaps by severity
* Recommend learning priorities
* Provide actionable improvement suggestions

### Personalized Roadmap

* Generate customized preparation plans
* Day-by-day learning recommendations
* Structured study roadmap
* Career-focused improvement tracking

### ATS-Friendly Resume Generator

* Create AI-optimized resumes
* Improve ATS compatibility
* Download generated resumes as PDF
* Tailor resumes for specific job roles

### Secure Authentication

* JWT-based authentication
* Protected routes
* Secure user sessions
* Token blacklist logout mechanism


## Tech Stack

### Frontend

* React.js 18
* Vite
* SCSS
* Context API
* Custom Hooks

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### AI Integration

* Groq API
* LLaMA 3.3 70B Versatile

### Authentication & Security

* JWT Authentication
* HttpOnly Cookies
* Token Blacklisting

### Additional Tools

* Multer (File Uploads)
* PDF Processing
* Render Deployment


## Project Structure

```bash
SkillBridge-AI
│
├── Frontend/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   └── interview/
│   │   ├── style/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── vite.config.js
│   └── package.json
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```


## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/skillbridge-ai.git
cd skillbridge-ai
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
CLIENT_URL=http://localhost:5173
```

Run Backend:

```bash
npm run dev
```


### Frontend Setup

```bash
cd Frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000
```

Run Frontend:

```bash
npm run dev
```


#### Open http://localhost:5173 to access the application.

## Screenshots



## API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |
| POST   | /api/auth/logout   | Logout User   |

### Interview Services

| Method | Endpoint                   | Description         |
| ------ | -------------------------- | ------------------- |
| POST   | /api/interview/generate    | Generate AI Report  |
| GET    | /api/interview/reports     | Fetch User Reports  |
| GET    | /api/interview/reports/:id | Fetch Single Report |
| POST   | /api/interview/resume/:id  | Download ATS Resume |


## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request