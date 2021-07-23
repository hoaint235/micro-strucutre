import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "../../../configurations";
import { Typography } from "../../atoms";
import { IconMenu } from "../../molecules";

const Language = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("");

  const selectLanguage = (item: LanguageItem) => {
    const { location } = item;
    if (language !== location) {
      setLanguage(location);
      i18n.changeLanguage(location);
    }
  };

  useEffect(() => {
    selectLanguage(Languages[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // react-hooks/exhaustive-deps

  return (
    <Box mr={1}>
      <IconMenu
        items={Languages}
        onItemClick={(item) => selectLanguage(item)}
        renderItem={(item) => <Typography.Body label={item.title} />}
      >
        {language}
      </IconMenu>
    </Box>
  );
};

export default Language;
