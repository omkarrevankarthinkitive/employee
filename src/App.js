import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

import Signup from "./pages/Signup";
import Prices from "./pages/Prices";
import Dashboard from "./pages/dashboard";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
// import Sidebar from "./Components/Sidebar";
import ViewUser from "./pages/ViewUser";
import Profile from "./pages/Profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/viewusers" element={<ViewUser />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
