import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// animation
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// compontents
import Service from "./component/allEvent/Service";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import HomePage from "./component/Home/HomePage";
import WeddingPage from "./component/allEvent/WeddingPage";
import BirthdayPage from "./component/allEvent/BirthdayPage";
import ReceptionPage from "./component/allEvent/ReceptionPage";
import EngagementPage from "./component/allEvent/EngagementPage";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reception" element={<ReceptionPage />} />
        <Route path="/birthday" element={<BirthdayPage />} />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/engagement" element={<EngagementPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
