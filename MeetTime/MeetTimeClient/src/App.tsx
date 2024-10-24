import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  return <div>Redirecting...</div>;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
    </Routes>
  );
}
