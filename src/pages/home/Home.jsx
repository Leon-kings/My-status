import React, { useEffect, useState } from "react";
// image component
import image0 from "../../assets/images/356202168_1515581109215839_7191836832866658358_n.jpg";
import image1 from "../../assets/images/Screenshot.png";
import image2 from "../../assets/images/Screenshot1.png";
import Services from "../sercices/Services";
import Contact from "../contact/Contact";
import IT from "../skillsets/Skill-set";
import Hero from "../head/Heading";
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
      <div className="w-full bg-black text-white sm:w-full md:w-full lg:w-full xl:w-full rounded shadow-md">
        {/* main container */}
        <div className="w-full p-4">
          <Hero/>
        </div>
        
        <div className="w-full">
          <IT />
        </div>
        {/*  */}
        <div className="w-full">
          <Services />
        </div>
        <div className="w-full">
          <Contact />
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
