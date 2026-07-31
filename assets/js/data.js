// ===== SKILLS =====
const SKILLS_DATA = [
  { "name": "Python", "icon": "fab fa-python" },
  { "name": "Java", "icon": "fab fa-java" },
  { "name": "C++", "icon": "fas fa-code" },
  { "name": "Pandas", "icon": "fas fa-table" },
  { "name": "NumPy", "icon": "fas fa-square-root-alt" },
  { "name": "Scikit-learn", "icon": "fas fa-brain" },
  { "name": "Flask", "icon": "fas fa-flask" },
  { "name": "Git & GitHub", "icon": "fab fa-git-alt" },
  { "name": "Google Cloud", "icon": "fab fa-google" },
  { "name": "PostgreSQL", "icon": "fas fa-database" },
  { "name": "MySQL", "icon": "fas fa-database" },
  { "name": "Tableau", "icon": "fas fa-chart-bar" },
  { "name": "Power BI", "icon": "fas fa-chart-pie" },
  { "name": "TensorFlow", "icon": "fas fa-brain" },
  { "name": "PyTorch", "icon": "fas fa-fire" },
  { "name": "EDA", "icon": "fas fa-chart-line" },
  { "name": "Machine Learning", "icon": "fas fa-robot" },
  { "name": "Deep Learning", "icon": "fas fa-network-wired" },
  { "name": "Interpersonal Skills", "icon": "fas fa-comments" },
  { "name": "APIs", "icon": "fas fa-plug" },
  { "name": "Feature Engineering", "icon": "fas fa-cogs" },
  { "name": "JavaScript", "icon": "fab fa-js" },
  { "name": "HTML5", "icon": "fab fa-html5" },
  { "name": "CSS3", "icon": "fab fa-css3-alt" }
];

// ===== PROJECTS =====
// 👉 TO ADD YOUR LIVE PROJECT LINK: edit the "view" field below (e.g. your Netlify/Vercel/Render URL).
// 👉 TO ADD YOUR GITHUB REPO LINK: edit the "code" field below (used as a fallback if "view" is empty).
const PROJECTS_DATA = [
  {
    "name": "AI Exam Proctoring System",
    "category": "Computer Vision · Machine Learning · Proctoring",
    "desc": "Computer vision-based exam monitoring system that detects focus loss, distraction, and phone usage in real time to strengthen academic integrity during online exams.",
    "tech": "Python, HTML, CSS, JavaScript",
    "links": { "view": "https://shani-prajapati.github.io/proctor/", "code": "https://github.com/Shani-Prajapati" }
  },
  {
    "name": "University Event Registration System",
    "category": "Web App · Full Stack",
    "desc": "Full-stack event management platform with real-time seat tracking, secure user authentication, and an admin dashboard to streamline university event registration.",
    "tech": "HTML, CSS, JavaScript, Python, Google Cloud",
    "links": { "view": " https://shani-prajapati.github.io/Universe-Event-Registration/", "code": "https://github.com/Shani-Prajapati" }
  },
  {
    "name": "Used Car Price Prediction",
    "category": "Machine Learning · Regression",
    "desc": "ML-powered web application using regression algorithms to predict used car prices, integrating a Flask backend with an interactive frontend.",
    "tech": "Python, Flask, Scikit-learn",
    "links": { "view": "", "code": "https://github.com/Shani-Prajapati" }
  },
  {
    "name": "CreditWise Loan System",
    "category": "Machine Learning · Classification",
    "desc": "End-to-end supervised ML pipeline (KNN, Logistic Regression, Naive Bayes) to predict loan approval, with EDA, feature engineering, and evaluation using Precision, Recall, and F1-score.",
    "tech": "Python, KNN, Logistic Regression, Naive Bayes",
    "links": { "view": "", "code": "https://github.com/Shani-Prajapati" }
  },
  {
    "name": "Code Review Agent",
    "category": "Developer Tools · Automation",
    "desc": "Automated code review tool that analyzes code quality and recommends improvements for cleaner, more efficient code.",
    "tech": "Python",
    "links": { "view": "https://codereview04.vercel.app", "code": "https://github.com/Shani-Prajapati" }
  }
];

// ===== HACKATHON CERTIFICATES =====
// 👉 TO ADD YOUR REAL CERTIFICATES: drop the image/PDF file into assets/certificates/
// then set "cert" below to its filename, e.g. "assets/certificates/sih2025.jpg"
const HACKATHON_CERTS = {
  "hackbaroda": "assets/certificates/hackbaroda2026.jpg",
  "hackathon36": "assets/certificates/hackathon36-uit-kiif.jpg",
  "hacksprint": "assets/certificates/google-cloud-hacksprint.jpg",
  "sih": "assets/certificates/sih2025.jpg"
};
