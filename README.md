# Candidate Search Application

## 📌 Description
The **Candidate Search Application** is a React and TypeScript-based web application that allows employers to search for potential candidates using the GitHub API. Users can browse through candidate profiles, accept or reject candidates, and save selected profiles to a list for later review. The application leverages local storage to persist saved candidates and is deployed using **Render**.

## 🚀 Live Demo
🔗 [Deployed Application URL](https://one3-bootcamp-hw.onrender.com)

## ✨ Features
- 🔍 Fetches GitHub user profiles via the **GitHub API**
- 🛠️ Built with **React**, **TypeScript**, and **Vite**
- 📂 Saves potential candidates using **local storage**
- 📜 Implements **React Router** for seamless navigation
- 🎨 Clean and responsive UI with **React Icons**
- 🚀 Deployed on **Render**

## 🏗️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Mimosquera/13-challenge.git
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create a `.env` File
- Inside the `environment/` folder, create a `.env` file with the following content:
```sh
VITE_GITHUB_TOKEN=your_personal_access_token_here
```
*(Replace `your_personal_access_token_here` with your actual GitHub token)*

### 4️⃣ Run the Development Server
```sh
npm run dev
```

### 5️⃣ Build for Production
```sh
npm run build
```

## 🖥️ Technologies Used
| Technology | Description |
|------------|-------------|
| React | JavaScript library for building UI |
| TypeScript | Typed superset of JavaScript |
| Vite | Fast development server |
| React Router | Routing for React applications |
| Local Storage | Data persistence |
| GitHub API | Fetches candidate data |
| Render | Deployment platform |

## 📌 Folder Structure
```
13-challenge/
├── environment/        # Environment variables
├── public/             # Static assets
├── src/
│   ├── api/            # API handling (GitHub API integration)
│   ├── components/     # Reusable components
│   ├── pages/          # Main pages (CandidateSearch, SavedCandidates)
│   ├── styles/         # CSS styles
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
├── .gitignore          # Files to ignore in Git
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## 📜 License
This project is licensed under the **MIT License**.

## 📩 Contact
For any questions or contributions, feel free to reach out:
📧 **Email**: michael2000ny@gmail.com  
🔗 **GitHub**: [Mimosquera](https://github.com/Mimosquera)
