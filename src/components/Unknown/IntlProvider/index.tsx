import React from "react";
import { IntlProvider as IntlProviderBase } from "react-intl";
import translations from "../../../common/translations";

export default function IntlProvider({ ...props }) {
  return (
    <IntlProviderBase
      key="en"
      locale="en"
      messages={translations.en}
      {...props}
    />
  );
}
