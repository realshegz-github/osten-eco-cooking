import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/osten-logo.png'

const Footer = () => {
  return (
    <footer className="bg-white text-primary">
      <div className="w-full ">
        <div className="mx-auto max-w-[1440px] px-[5%] md:flex md:justify-between py-20">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className='object-cover max-w-96 h-full'/>
            </Link>
        
          </div>

          <div>
            <div className="mb-5">
              <h2 className="font-bold text-md ">Contact Us</h2>
              <hr className="border-b-4 border-secondary w-11" />
            </div>
            <ul className="text-base max-w-[244px]">
              <li className="mb-1 flex items-center gap-1">
                <b>Email:</b>
                <a href={`mailto:inquiries@ostenlaboratory.com`}>inquiries@ostenlaboratory.com</a>
              </li>
              <li className="mb-1">
                <b>Phone:</b> +2347015862798
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full py-10 sm:py-7 bg-secondary">
          <p className=" text-white text-center ">
            Copyright Osten Laboratory. 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
