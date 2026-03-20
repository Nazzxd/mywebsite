import React from "react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  
  const images = [
    "/img/cake1.jpg",
    "/img/cake2.jpg",
    "/img/cake4.webp",
  ];

  return (
    <div className="py-20 bg-slate-900 text-white min-h-screen">
      <h2 className="text-center text-5xl font-bold mb-16">{t("pricing.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="bg-white/5 p-6 rounded-3xl  transform transition duration-300 hover:scale-105 border border-white/10 shadow-2xl"
          >
            <img
              src={src}
              className="rounded-2xl mb-4 w-full h-48 object-cover"
              alt={`Pricing ${idx + 1}`}
              loading="lazy" 
            />
            <h3 className="text-2xl font-bold">{t("pricing.card_title")}</h3>
            <button className="mt-6 bg-green-500 w-full transform transition duration-300 hover:scale-105 py-3 rounded-xl font-bold hover:bg-green-600 transition">
              {t("pricing.btn")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;