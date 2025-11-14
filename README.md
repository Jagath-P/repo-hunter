About
Repo Hunter is a tool that helps you discover high-quality GitHub repositories based on the topics/domains you select from the available list.

Features
-Select multiple domains/topics
-Calls backend APIs to fetch GitHub repos
-Displays repositories in cards with details
-Fully modular React components

Folder Structure
repo-hunter/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # UI components (TopicBox, Card, etc.)
│   │   ├── pages/
│   │   ├── utils/
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── server/                 # Node.js Express Backend
│   ├── server.js
│   ├── routes/
│   │   ├── getRepos.js
│   │   ├── domain.js
│   │   └── commits.js
│   ├── services/
│   └── package.json
│
└── README.md

Backend Setup
-cd server # Navigate to backend
-npm install # Install dependencies
    GITHUB_TOKEN="your_github_pat_here" # in .env file, change token
-node server.js # Run the backend server at http://localhost:5000


Frontend Setup
-cd client # Navigate to frontend
-npm install # Install dependencies
-npm run dev # Start development server at http://localhost:5173

Tech Stack
    Frontend : React | Vite | TailwindCSS
    Backend : Node.js | Express.js 


Future Improvements
-Pagination for large repo lists
-Filters → stars, language, recency
-Saving favorite repos
-Deployed version