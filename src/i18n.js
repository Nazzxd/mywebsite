import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: { home: "Home", contact: "Contact" },
        header: { title: "Our range of cakes", subtitle: "Here you will find the most delicious cakes!" },
        pricing: { title: "Vanilla / Vanilla-Choco / Chocolate: €3.50 / €2Apple cake: €5 / €3", card_title: "Cakes", btn: "Really tasty" },
        contact: { title: "Contact Us", name: "Name", message: "Message" }
      }
    },
    ua: {
      translation: {
        nav: { home: "Thuis", contact: "Contact" },
        header: { title: "Ons assortiment taarten ", subtitle: "Hier vind je de  allerlekkerste taarten!" },
        pricing: { title: "  (vanille / vanill-choco / chocolade): €3,50 / €2 Apple cake: €5 / €3", card_title: "taarten", btn: "Echt lekker " },
        contact: { title: "Contact met onz ", name: "s.looijen@leerpark-arnhem.nl      ", message: "Schrijf ons per e-mail s.looijen@leerpark-arnhem.nl welke taart je hebt gekozen en geef aan of je een hele taart of een halve wilt." }
      }
    }
  },
  lng: "ua",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;