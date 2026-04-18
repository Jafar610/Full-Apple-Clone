import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import SharedLayout from "./Components/SharedLayout";
import Home from "./Components/Home";
import Store from "./Pages/Apple_Store/Store";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element = {<Home/>}/>
            <Route path="/store" element={<Store />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
