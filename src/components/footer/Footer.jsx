import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

React;
export default function Footer() {
  return (
    <>
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} LD. All rights reserved.</p>
      
        <div className="mt-4">
          <span className="text-gray-400 text-xs">Follow us on:</span>
          <div className="flex justify-center space-x-4 mt-2">
            <FaFacebook className="size-6" />
     
            <BsTwitter className="size-6" />
          
            <BsInstagram className="size-6" />
            
            <BiEnvelope className="size-6" />
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
