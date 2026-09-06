import { Toaster } from "react-hot-toast"
import { Navigate, Route, Routes } from "react-router-dom"
import LoginLanding from "./pages/LoginLanding"
import Dashboard from "./pages/Dashboard"
import Layout from "./pages/Layout"
import Employees from "./pages/Employees"
import Attendance from "./pages/Attendance"
import Leave from "./pages/Leave"
import Payslips from "./pages/Payslips"
import Settings from "./pages/Settings"
import Printpayslip from "./pages/Printpayslip"
import LoginForm from "./components/LoginForm"



const App = () => {
  return (
    <>
    <Toaster />
    <Routes>
      <Route path="/login" element={<LoginLanding/>}/>
      <Route path="/login/admin" element={<LoginForm role="admin" title="Admin portal" 
      subtitle="Sign in to manage the organisation"/>}/>
      <Route path="/login/employee" element={<LoginForm role="employee" title="Employee portal"
      subtitle="Sign in to access your account"/>}/>

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/leave" element={<Leave/>}/>
        <Route path="/payslips" element={<Payslips/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Route>
      <Route path="/print/payslips/:id" element={<Printpayslip/>}/>
      <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
    </Routes>
    </>
  )
}

export default App