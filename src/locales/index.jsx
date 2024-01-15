import React, { createContext, useContext, useState } from "react";
import { IntlProvider } from "react-intl";
import translationspt from "./translations/translationspt.json";
import translationsen from "./translations/translationsen.json";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const supportedLanguages = {
    en: translationsen,
    pt: translationspt,
  };

  const userLanguage = navigator.language.split(/[-_]/)[0];
  const [currentLanguage, setCurrentLanguage] = useState(userLanguage);

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const contextValue = {
    currentLanguage,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      <IntlProvider
        locale={currentLanguage}
        messages={supportedLanguages[currentLanguage]}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
