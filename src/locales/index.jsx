import { IntlProvider, useIntl } from "react-intl";
import translationspt from "./translations/translationspt.json";
import translationsen from "./translations/translationsen.json";

export const IntlProviderWrapper = ({ children }) => {
  const supportedLanguages = {
    en: translationsen,
    pt: translationspt,
  };

  const userLanguage = navigator.language.split(/[-_]/)[0];
  return (
    <IntlProvider
      locale={userLanguage}
      messages={supportedLanguages[userLanguage]}
    >
      {children}
    </IntlProvider>
  );
};
