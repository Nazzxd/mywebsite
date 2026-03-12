import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="relative w-full h-screen text-white overflow-hidden">
     
      <div className="fixed top-5 transform transition duration-300 hover:scale-105 right-5 flex gap-2 z-[100]">
        <button 
          onClick={() => i18n.changeLanguage("en")} 
          className="bg-white/20 hover:bg-white  hover:text-black px-4 py-2 rounded-lg backdrop-blur-md border border-white/30 transition-all font-bold cursor-pointer"
        >
          EN
        </button>
        <button 
          onClick={() => i18n.changeLanguage("ua")} 
          className="bg-white/20 hover:bg-white hover:text-black px-4 py-2 rounded-lg backdrop-blur-md border border-white/30 transition-all font-bold cursor-pointer"
        >
          UA
        </button>
      </div>

      <nav className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-8 z-20 font-bold bg-black/20 p-4 rounded-full backdrop-blur-md transform transition duration-300 hover:scale-105 ">
        <Link to="/" className="hover:text-green-400 transition">{t("nav.home")}</Link>
        <Link to="/contact" className="hover:text-green-400 transition">{t("nav.contact")}</Link>
      </nav>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl">{t("header.title")}</h1>
        <h2 className="text-xl md:text-2xl opacity-90 drop-shadow-md">{t("header.subtitle")}</h2>
      </div>

      <img src="/img/photo1.jpg" className="absolute inset-0 w-full h-full object-cover brightness-50" alt="Travel" />
    </header>
  );
};

export default Header;