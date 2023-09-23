import arabic from "./locals/ar";
import english from "./locals/en";

const defaultLanguage = "ar";
const lang = {
  ar: arabic,
  en: english,
};

const getUserLanguage = () => {
  let language = localStorage.getItem("userLanguage");
  if (language) {
    return lang[language];
  } else {
    localStorage.setItem("userLanguage", defaultLanguage);
    return defaultLanguage;
  }
};

const LANGUAGE = getUserLanguage();

export default LANGUAGE;
