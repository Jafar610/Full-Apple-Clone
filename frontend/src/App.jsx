import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import SharedLayout from "./Components/SharedLayout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
