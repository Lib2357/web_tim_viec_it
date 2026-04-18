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
import Notifications from './pages/Notifications.jsx'
import JobProgress from './pages/JobProgress.jsx'
import MessagesCenter from './pages/MessagesCenter.jsx'
import AuthPortal from './pages/AuthPortal.jsx'
import JobDetail from './pages/JobDetail.jsx'
import Discussions from './pages/Discussions.jsx'
import Favorites from './pages/Favorites.jsx'

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
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/job-progress" element={<JobProgress />} />
        <Route path="/messages" element={<MessagesCenter />} />
        <Route path="/login" element={<AuthPortal mode="login" />} />
        <Route path="/register" element={<AuthPortal mode="register" />} />
        <Route path="/forgot-password" element={<AuthPortal mode="forgot" />} />
        <Route path="/job-detail" element={<JobDetail />} />
        <Route path="/job-detail/:id" element={<JobDetail />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)






