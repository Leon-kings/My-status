import React, { useEffect, useState } from "react";
// image component

import Services from "../sercices/Services";
// import Contact from "../contact/Contact";
// import IT from "../skillsets/Skill-set";
import Hero from "../head/Heading";
import Blog from "../skillsets/Potfolio";
// end of images

React;
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-full bg-black rounded shadow-md">
        {/* main container */}
        <div className="part">
          <Hero/>
        </div>
        <div className="part">
          <Services />
        </div>
        <div className="part">
          <Blog/>
        </div>
        <div className="part">
          {/* <Contact /> */}
        </div>
        {/* nice flowback */}
        <div>
          <br />
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              &#8593;
            </button>
          )}
        </div>
      </div>
    </>
  );
}
