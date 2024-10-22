import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FooterPage from "./pages/FooterPage";
import Header from "./components/Header";
import MaintenancePage from "./pages/Maintinance";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Admin from "./components/realestate/Admin/Admin";
import Signout from "./pages/Signout";
import Property from "./components/properties/Property";
import Hostel from "./components/hostels/Hostel";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MaintenancePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/properties" element={<Property />} />
        <Route path="/hostels" element={<Hostel />} />
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
