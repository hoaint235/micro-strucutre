import React from "react";
import { useHistory } from "react-router-dom";
import IconMenu from "../../molecules/IconMenu";
import { Typography } from "../../atoms";
import { CognitoService } from "../../../services";
import { Settings } from "@material-ui/icons";
import Pages from "../../../utils/constants/pages";
import { useTranslation } from "react-i18next";

const SettingMenu = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const menus = [
    {
      title: t("settings.profile"),
      action: () => history.push(Pages.PROFILE),
    },
    {
      title: t("settings.logout"),
      action: async () => {
        await CognitoService.signOut();
        history.push(Pages.SIGN_IN);
      },
    },
  ];

  return (
    <IconMenu
      color="secondary"
      items={menus}
      onItemClick={(item) => item.action()}
      renderItem={(item) => <Typography.Body label={item.title} />}
    >
      <Settings />
    </IconMenu>
  );
};

export default SettingMenu;
