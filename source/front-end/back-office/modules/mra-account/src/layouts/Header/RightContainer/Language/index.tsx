import {
  Avatar,
  Box,
  fade,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import IconMenu from "../../../../components/controls/IconMenu";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    color: theme.palette.primary.main,
    backgroundColor: fade(theme.palette.primary.main, 0.2),
  },
}));

const useStylesAvatar = makeStyles(() => ({
  root: {
    borderRadius: "30%",
  },
}));

type Language = {
  title: string;
  location: string;
};

const languages: Language[] = [
  {
    title: "English",
    location: "en",
  },
  {
    title: "VietNamese",
    location: "vn",
  },
];

const Language = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const classesAvatar = useStylesAvatar();
  const [language, setLanguage] = useState(null);

  const selectLanguage = (item: Language) => {
    const { location } = item;
    if (language !== location) {
      setLanguage(location);
      i18n.changeLanguage(location);
    }
  };

  useEffect(() => {
    selectLanguage(languages[0]);
  }, []); // react-hooks/exhaustive-deps

  const renderAvatar = useMemo(
    () => (
      <Avatar className={classes.icon} classes={{ ...classesAvatar }}>
        {language}
      </Avatar>
    ),
    [language]
  ); // react-hooks/exhaustive-deps

  return (
    <Box>
      <IconMenu
        items={languages}
        onItemClick={(item) => selectLanguage(item)}
        renderItem={(item) => (
          <Typography component="p" variant="body1">
            {item.title}
          </Typography>
        )}
      >
        {renderAvatar}
      </IconMenu>
    </Box>
  );
};

export default Language;
