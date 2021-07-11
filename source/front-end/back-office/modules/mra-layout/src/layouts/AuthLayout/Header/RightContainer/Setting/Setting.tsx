import { MTypography, Box, MIconMenu } from "@mra/theme";
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
      <MIconMenu
        color="secondary"
        items={menus}
        onItemClick={(item) => item.action()}
        renderItem={(item) => <MTypography.Body label={item.title} />}
      >
        <Settings />
      </MIconMenu>
    </Box>
  );
};

export default Setting;
