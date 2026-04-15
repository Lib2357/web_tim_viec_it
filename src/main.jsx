import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import JobList from './pages/JobList.jsx'
import Contracts from './pages/Contracts.jsx'
import JobDirectory from './pages/JobDirectory.jsx'
import MilestoneManagement from './pages/MilestoneManagement.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/job-list" element={<JobDirectory />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/milestones" element={<MilestoneManagement />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)


