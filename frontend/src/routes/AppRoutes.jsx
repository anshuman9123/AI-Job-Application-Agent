import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import UploadResume from "../pages/UploadResume";
import JobDescription from "../pages/JobDescription";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/upload" element={<UploadResume />} />
         <Route path="/analyze" element={<JobDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;