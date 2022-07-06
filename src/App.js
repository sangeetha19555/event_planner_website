import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import "./App.css";

// animation
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// compontents

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
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/reception" element={<ReceptionPage />} />
          <Route path="/birthday" element={<BirthdayPage />} />
          <Route path="/wedding" element={<WeddingPage />} />
          <Route path="/engagement" element={<EngagementPage />} />
          <Route path="/babyshower" element={<BabyShowerPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
