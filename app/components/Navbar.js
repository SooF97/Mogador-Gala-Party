"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHome,
  FaMoneyBill,
  FaLinkedin,
  FaDraft2Digital,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const customDarkTheme = darkTheme({
    fontFamily: "Montserrat, sans-serif",
    colors: {
      primaryButtonBg: "#280153",
      modalBg: "#280153",
      accentText: "#fffff",
      primaryButtonText: "white",
      primaryText: "#ffffff",
      secondaryText: "#5D5A6C",
      connectedButtonBg: "#280153",
      connectedButtonBgHover: "#280153",
      dropdownBg: "#280153",
      scrollbarBg: "#280153",

      // ... etc
    },
  });

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className="text-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            <div className="flex flex-row justify-center items-center gap-3">
              <Image src="/ddd.png" width={100} height={100} alt="logo" />
              <div >Mogador Party</div>
            </div>
          </Link>
        </div>

        <div className={`hidden md:flex space-x-4`}>
          <div className="flex flex-row items-center justify-center gap-6">
            <NavItem icon={<FaHome />} text="HOME" path="/" />

            <NavItem icon={<FaMoneyBill />} text="BUY" path="/buy" />

            <NavItem icon={<FaSearch />} text="DASHBOARD" path="/dashboard" />
          </div>
        </div>
        <div className="hidden md:flex transform hover:scale-105 transition-all duration-300 ">
          <ConnectWallet
            theme={customDarkTheme}
            btnTitle="SIGN IN"
            modalTitle="SIGN IN"
            welcomeScreen={{
              title: "Mogador Event Gala Party",
              subtitle: "Purchase your tickets in form of NFTs",
              img: {
                src: "https://www.crosalsafestival.com/var/news/storage/images/cssf/2023/spotlights/parties/gala_party/589955-3-eng-GB/gala_party_cssffullarticle.jpg",
                width: 200,
                height: 200,
              },
            }}
          />
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            <FaBars className="text-3xl" />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && <MobileMenu onClose={toggleNavbar} />}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, text, path }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center cursor-pointer hover:font-semibold"
    >
      {icon}
      <Link href={`${path}`}>
        <span className="ml-2 hover:text-semibold">{text}</span>
      </Link>
    </motion.div>
  );
};

const MobileMenu = ({ onClose }) => {
  const customDarkTheme = darkTheme({
    fontFamily: "Montserrat, sans-serif",
    colors: {
      primaryButtonBg: "#280153",
      modalBg: "#280153",
      accentText: "#fffff",
      primaryButtonText: "white",
      primaryText: "#ffffff",
      secondaryText: "#5D5A6C",
      connectedButtonBg: "#280153",
      connectedButtonBgHover: "#280153",
      dropdownBg: "#280153",
      scrollbarBg: "#280153",

      // ... etc
    },
  });
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="fixed top-0 left-0 w-full h-screen bg-gray-900 text-white p-4"
    >
      <div className="flex justify-end">
        <button onClick={onClose}>
          <FaTimes className="text-2xl" />
        </button>
      </div>
      <div className="mt-8 space-y-4 ml-4">
        <NavItem icon={<FaHome />} text="HOME" path="/" />

        <NavItem icon={<FaMoneyBill />} text="BUY" path="/buy" />

            <NavItem icon={<FaSearch />} text="DASHBOARD" path="/dashboard" />
      </div>
      <div className="flex flex-col items-center justify-center m-4">
        <div className="flex flex-col gap-4 items-center justify-center  bg-gray-100 w-48 p-3 rounded-3xl">
          <div className="flex flex-row items-center justify-center text-2xl text-violet-950 gap-3 m-6">
            <Link
              href="https://www.linkedin.com/in/soufiane-masad-2a8836286/"
              target="_blank"
            >
              <FaLinkedin className=" hover:scale-105 hover:text-violet-950" />
            </Link>
            <Link href="https://twitter.com/soufien_msd" target="_blank">
              <FaTwitter className=" hover:scale-105 hover:text-violet-950" />
            </Link>
            <Link href="https://www.facebook.com/souf.msd/" target="_blank">
              <FaFacebook className=" hover:scale-105 hover:text-violet-950" />
            </Link>
            <Link href="https://www.instagram.com/soufien.msd/" target="_blank">
              <FaInstagram className=" hover:scale-105 hover:text-violet-950" />
            </Link>
          </div>
          <ConnectWallet
            theme={customDarkTheme}
            btnTitle="SIGN IN"
            modalTitle="SIGN IN"
            welcomeScreen={{
              title: "Mogador Evenet Gala Party",
              subtitle: "Buy your ticket in form of NFT",
              img: {
                src: "/lpp.png",
                width: 300,
                height: 50,
              },
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;