import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/project/CreateProject";

// pages & components
import Navbar from "./components/layout/Navbar";
import ProjectDetails from "./components/project/Project Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create" element={<CreateProject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
