import React from "react";
import { LOCALES } from "../i18n/locales";
import { useEffect, useState } from "react";
export const I18nSelect = (props) => {
  var [language, setLanguage] = useState(LOCALES.SPANISH)
  useEffect(() => {
    props.setLanguage(language);
  }, [language, props]);
  
  return (
    <ul>
      <li><button  onClick={() => setLanguage(LOCALES.ENGLISH)}>English</button></li>
      <li><button  onClick={() => setLanguage(LOCALES.SPANISH)}>Español</button></li>
    </ul>
  );
};
