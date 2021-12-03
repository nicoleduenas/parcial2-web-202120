import React from "react";
import { LOCALES } from "../i18n/locales";
import App from "../App";
export const I18nSelect = () => {
  var language = LOCALES.SPANISH
  return (
    <ul className="dropdown-menu" id="dropdown">
      <li><a href="#English" onClick={language=LOCALES.ENGLISH}>English</a></li>
      <li><a href="#Español" onClick={language=LOCALES.SPANISH}>Español</a></li>
    </ul>
  );
};
