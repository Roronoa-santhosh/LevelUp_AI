# Career Intelligen RAG System

An AI-powered Career Intelligence Platform that analyzes student syllabi, resumes, and academic documents using Retrieval-Augmented Generation (RAG) to generate career insights, skill gap analysis, market alignment, and roadmap recommendations.

Built using:

- Next.js (Frontend)
- Express.js (Backend API)
- MongoDB (Authentication & future history storage)
- ChromaDB (Vector Database)
- Google Gemini API (LLM + Embeddings)
- LangChain (Chunking & AI pipeline)
- Axios (API communication)

---


# Features

- PDF Upload System
- Automatic Text Extraction
- Semantic Chunking
- Vector Embedding Generation
- ChromaDB Semantic Retrieval
- AI-Powered Career Analysis
- Skill Gap Detection
- Career Roadmap Generation
- Market-Aware Recommendations
- JWT Authentication
- Multi-user Architecture
- Retrieval-Augmented Generation (RAG)

---

# System Architecture

```text
Frontend (Next.js)
        ↓
Axios API Requests
        ↓
Express Backend
        ↓
PDF Upload & Text Extraction
        ↓
Text Cleaning
        ↓
Semantic Chunking
        ↓
Gemini Embedding Generation
        ↓
ChromaDB Vector Storage
        ↓
Semantic Search Retrieval
        ↓
Gemini Career Intelligence Analysis
        ↓
Frontend Visualization
```

---

# Tech Stack

## Frontend

- Next.js
- React.js
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- Multer
- JWT Authentication

## AI / RAG

- Google Gemini API
- LangChain
- ChromaDB

## Database

- MongoDB
- ChromaDB

---

# Project Structure

```text
backend/
│
├── config/
│   └── db.js
│
├── middleware/
│   └── auth.js
│
├── routes/
│   ├── auth.js
│   ├── upload.js
│   └── analyze.js
│
├── services/
│   ├── pdfService.js
│   ├── cleanText.js
│   ├── chunkService.js
│   ├── embeddingService.js
│   ├── chromaService.js
│   └── ragService.js
│
├── uploads/
│
├── server.js
└── .env


client/
│
├── app/
├── components/
├── services/
└── pages/
```

---

# RAG Pipeline

## 1. PDF Upload

Students upload syllabus or resume PDFs.

## 2. Text Extraction

PDF text is extracted from uploaded documents.

## 3. Text Cleaning

Noise such as:
- extra spaces
- page labels
- symbols
- formatting artifacts

are removed.

## 4. Chunking

Text is divided into semantic chunks using LangChain RecursiveCharacterTextSplitter.

## 5. Embedding Generation

Each chunk is converted into vector embeddings using Google Gemini Embedding Model.

## 6. Vector Storage

Embeddings are stored in ChromaDB for semantic retrieval.

## 7. Semantic Retrieval

Relevant chunks are retrieved using vector similarity search.

## 8. AI Analysis

Gemini analyzes:
- career opportunities
- skill gaps
- market relevance
- roadmap suggestions

---

# Authentication System

The project includes JWT-based authentication.

Features:
- User Registration
- User Login
- Protected Routes
- User-specific Vector Isolation

---

# Environment Variables

Create a `.env` file inside backend:

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key


```

---

# Installation

## Backend

```bash
cd backend

npm install
```

Run backend:

```bash
npm run dev
```

---

## Frontend

```bash
cd client

npm install
```

Run frontend:

```bash
npm run dev
```

---

# ChromaDB Setup

Install ChromaDB:

```bash
pip install chromadb
```

Run ChromaDB server:

```bash
chroma run --host localhost --port 8000
```

---

# API Routes

## Authentication

### Register

```http
POST /auth/register
```

### Login

```http
POST /auth/login
```

---

## Upload PDFs

```http
POST /upload
```

Protected Route

---

## Analyze Career Intelligence

```http
GET /api/analyze
```

Protected Route

---

# AI Analysis Output

The system generates:

- Career Match Roles
- Readiness Score
- Skill Gap Analysis
- Market Alignment
- Salary Insights
- Learning Recommendations
- Year-wise Career Roadmap

---

# Future Improvements

- User Analysis History
- Dashboard Analytics
- AI Chat Assistant
- Resume Optimization
- Job Recommendation Engine
- Real-time Market Trend Integration
- Multi-file Semantic Comparison
- Advanced Vector Filtering
- Local Embedding Models
- Deployment Support

---

# Learning Highlights

This project demonstrates understanding of:

- Retrieval-Augmented Generation (RAG)
- Semantic Search
- Vector Databases
- Embedding Models
- AI System Architecture
- Full Stack Development
- Authentication Systems
- Prompt Engineering
- Chunking Strategies
- AI-powered Recommendation Systems

---

#

# License

MIT License
