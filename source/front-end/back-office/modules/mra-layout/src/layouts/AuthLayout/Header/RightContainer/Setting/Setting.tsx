import { Body, Box, IconMenu } from "@mra/theme";
import { Settings } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { Cognito } from "@mra/utility";

const Setting = () => {
  const history = useHistory();

  const menus = [
    {
      title: "Profile",
      action: () => history.push("/profile"),
    },
    {
      title: "Logout",
      action: async () => await Cognito.signOut(),
    },
  ];

  return (
    <Box>
      <IconMenu
        color="secondary"
        items={menus}
        onItemClick={(item) => item.action()}
        renderItem={(item) => <Body label={item.title} />}
      >
        <Settings />
      </IconMenu>
    </Box>
  );
};

export default Setting;
