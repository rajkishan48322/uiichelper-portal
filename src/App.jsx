import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import DashboardLayout from './layouts/DashboardLayout'

import LandingPage from './pages/LandingPage'
import HelpSupport from './pages/HelpSupport'

import AgentRegister from './pages/agent/AgentRegister'
import AgentVerifyOtp from './pages/agent/AgentVerifyOtp'
import AgentSuccess from './pages/agent/AgentSuccess'
import AgentStatus from './pages/agent/AgentStatus'

import CustomerLogin from './pages/customer/CustomerLogin'
import CustomerVerifyOtp from './pages/customer/CustomerVerifyOtp'
import CustomerDashboard from './pages/customer/CustomerDashboard'
import PolicyDetails from './pages/customer/PolicyDetails'
import PolicyDownload from './pages/customer/PolicyDownload'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/help" element={<HelpSupport />} />

          <Route path="/agent/register" element={<AgentRegister />} />
          <Route path="/agent/verify-otp" element={<AgentVerifyOtp />} />
          <Route path="/agent/success" element={<AgentSuccess />} />
          <Route path="/agent/status" element={<AgentStatus />} />

          <Route path="/customer/login" element={<CustomerLogin />} />
          <Route path="/customer/verify-otp" element={<CustomerVerifyOtp />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/customer/policy/:id" element={<PolicyDetails />} />
        </Route>

        <Route path="/customer/policy/:id/download" element={<PolicyDownload />} />
      </Routes>
    </BrowserRouter>
  )
}
