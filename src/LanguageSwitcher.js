import React, { useContext } from "react";

import LanguageContext from "./language-context";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div>
      <p>inside language: {language}</p>
      <button onClick={() => setLanguage("en")}>Switch Language to en</button>
      <button onClick={() => setLanguage("jp")}>Switch Language to jp</button>
      <button onClick={() => setLanguage("pt")}>Switch Language to pt</button>
    </div>
  );
};

export default LanguageSwitcher;
