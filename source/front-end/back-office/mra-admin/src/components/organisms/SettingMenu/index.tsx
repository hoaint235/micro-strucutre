import React from "react";
import { useHistory } from "react-router-dom";
import IconMenu from "../../molecules/IconMenu";
import { Typography } from "../../atoms";
import { CognitoService } from "../../../services";
import { Settings } from "@material-ui/icons";

const SettingMenu = () => {
  const history = useHistory();

  const menus = [
    {
      title: "Profile",
      action: () => history.push("/profile"),
    },
    {
      title: "Logout",
      action: async () => await CognitoService.signOut(),
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
