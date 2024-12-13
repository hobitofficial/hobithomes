import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FooterPage from "./pages/FooterPage";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Admin from "./components/realestate/Admin/Admin";
import Signout from "./pages/Signout";
import Property from "./components/properties/Property";
import Hostel from "./components/hostels/Hostel";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Demo from "./pages/Demo";
import PropertyDetails from "./components/properties/PropertyDetails";
import AddProperty from "./components/properties/AddProperty";
import UpdateProperty from "./components/properties/UpdateProperty";
import MyProperty from "./components/realestate/Admin/MyProperty";
import HostelFeatures from "./pages/HostelFeatures";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<MaintenancePage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/properties" element={<Property />} />
        <Route path="/hostels" element={<Hostel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/addProperty" element={<AddProperty />} />
        <Route path="/updateProperty" element={<UpdateProperty />} />
        <Route path="/propertydetails" element={<PropertyDetails />} />
        <Route path="/myproperty" element={<MyProperty />} />
        <Route path="/hostel" element={<HostelFeatures />} />
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
