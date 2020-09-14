import React from "react";
import AppRouter from "./App.router";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import en_message from "@zef/pages/lang/en.json";
import jp_message from "@zef/pages/lang/jp.json";
import { localeSelector } from "@zef/pages/user/selector";
const messages = {
  "en-US": en_message,
  "ja-JP": jp_message,
};

function App() {
  const locale = useSelector(localeSelector);

  return (
    <IntlProvider locale={locale} messages={messages[locale]} key={locale}>
      <AppRouter />
    </IntlProvider>
  );
}

export default App;
