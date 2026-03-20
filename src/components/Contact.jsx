import React from "react";
import { useTranslation } from "react-i18next";
import SEO from "./SEO";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-10 flex flex-col items-center">
      <SEO title={t("nav.contact")} />
      <h1 className="text-5xl font-bold mb-12">{t("contact.title")}</h1>
      <form className="w-full max-w-lg bg-white/5 p-10 rounded-3xl border border-white/10 flex flex-col gap-5">
        
        <input
          type="text"
          placeholder={t("contact.name")}
          disabled
          className="p-4 rounded-xl transform transition duration-300 hover:scale-105 bg-white/10 border border-white/20 outline-none focus:border-green-500"
        />

        <textarea
          placeholder={t("contact.message")}
          rows="4"
          disabled
          className="p-4 rounded-xl transform transition duration-300 hover:scale-105 bg-white/10 border border-white/20 outline-none focus:border-green-500"
        ></textarea>

      </form>
    </div>
  );
};

export default Contact;