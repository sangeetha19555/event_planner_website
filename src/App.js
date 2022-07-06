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
import BabyShowerPage from "./component/allEvent/BabyShowerPage";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/reception" element={<ReceptionPage />} />
        <Route exact path="/birthday" element={<BirthdayPage />} />
        <Route exact path="/wedding" element={<WeddingPage />} />
        <Route exact path="/engagement" element={<EngagementPage />} />
        <Route exact path="/babyshower" element={<BabyShowerPage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
