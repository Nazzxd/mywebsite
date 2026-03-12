import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: { home: "Home", contact: "Contact" },
        header: { title: "Travel Time", subtitle: "Adventure awaits you!" },
        pricing: { title: "Popular Destinations", card_title: "Mountain", btn: "Details" },
        contact: { title: "Contact Us", name: "Name", message: "Message", send: "Send" }
      }
    },
    ua: {
      translation: {
        nav: { home: "Головна", contact: "Контакти" },
        header: { title: "Час Подорожей", subtitle: "Твоя пригода починається тут!" },
        pricing: { title: "Популярні напрямки", card_title: "Гори", btn: "Детальніше" },
        contact: { title: "Зв'язатися з нами", name: "Ім'я", message: "Повідомлення", send: "Надіслати" }
      }
    }
  },
  lng: "ua",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;