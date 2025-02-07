import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Opening from "./assets/video//opening.mp4";
import Navbar from "./components/nav/Navbar";
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
          <main className="w-full min-h-screen bg-white flex flex-col">
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </main>
        )}
      </div>
    </>
  );
};

export default App;
