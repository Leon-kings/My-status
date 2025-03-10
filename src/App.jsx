import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Opening from "./assets/video//opening.mp4";
import Navbar from "./components/nav/Navbar";
import Services from "./pages/sercices/Services";
import Contact from "./pages/contact/Contact";
import Message from "./pages/form/msg/Message";
import Messsages from "./pages/form/message/Messages";
import Footer from "./components/footer/Footer";
import Experience from "./pages/experience/Experience";
import About from "./pages/about/About";
import Service from "./pages/services/Services";
React;
const App = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVideoEnded(true), 5000); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen">
        {!videoEnded ? (
          <video
            autoPlay
            muted
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={() => setVideoEnded(true)}
          >
            <source src={Opening} type="video/mp4" />
          </video>
        ) : (
          <main className="w-full">
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/77930" element={<About />} />
                <Route path="/7930" element={<Service />} />
                <Route path="/84930/84390" element={<Message />} />
                <Route path="/84930/84398" element={<Messsages />} />
                <Route path="/7493097" element={<Services />} />
                <Route path="/8340u20u" element={<Contact />} />
                <Route path="/84940/9802" element={<Experience />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </main>
        )}
      </div>
    </>
  );
};

export default App;
