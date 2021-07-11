import { Box, MIconMenu, MTypography } from "@mra/theme";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "../../../../../configurations";
import { WindowEvents } from "../../../../../utils";

const Language = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(null);

  const selectLanguage = (item: LanguageItem) => {
    const { location } = item;
    if (language !== location) {
      setLanguage(location);
      i18n.changeLanguage(location);
      window.dispatchEvent(
        new CustomEvent(WindowEvents.CHANGE_LANGUAGE, {
          detail: { location: location },
        })
      );
    }
  };

  useEffect(() => {
    selectLanguage(Languages[0]);
  }, []); // react-hooks/exhaustive-deps

  return (
    <Box mr={1}>
      <MIconMenu
        items={Languages}
        onItemClick={(item) => selectLanguage(item)}
        renderItem={(item) => <MTypography.Body label={item.title} />}
      >
        {language}
      </MIconMenu>
    </Box>
  );
};

export default Language;
