# 🤖 Flask AI Chatbot

A lightweight, responsive web-based AI chatbot built using **Flask**, **Google Gemini API**, and **Vanilla JavaScript**. This application provides real-time AI assistance through an intuitive user interface and is hosted live on Render.

🔗 **Live Demo:** [https://flask-chatbot-3-kfs5.onrender.com/](https://flask-chatbot-3-kfs5.onrender.com/)  


---

## 🚀 Features

* **Interactive UI:** Clean, modern frontend interface powered by HTML, CSS, and JavaScript.
* **Gemini API Integration:** Generates intelligent, real-time responses using Google's Gen AI SDK.
* **Asynchronous Requests:** Smooth chat experience without page reloads using Fetch API.
* **Environment Security:** Sensitive API keys are safely managed using `.env` variables.
* **Production Ready:** Configured with `gunicorn` for seamless deployment on Render.

---

## 🛠️ Tech Stack

* **Backend:** Python, Flask, Gunicorn
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **AI Model:** Google Gemini API (`google-genai` / `google-generativeai`)
* **Deployment:** Render

---

## 📂 Repository Structure

```text
flask_chatbot/
│── static/
│   ├── script.js        # Frontend JavaScript for handling API calls and UI updates
│   └── style.css        # Styling for chat user interface
│── templates/
│   └── index.html       # Main HTML template for the chatbot interface
│── .env                 # Environment variables (API Key) - ignored by Git
│── .gitignore           # Git ignore rules
│── app.py               # Flask backend server and Gemini API logic
└── requirements.txt     # Python dependencies for local setup & deployment
