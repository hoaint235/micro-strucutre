import { useHistory } from "react-router-dom";
import IconMenu from "../../molecules/IconMenu";
import { Typography } from "../../atoms";
import { cognitoService } from "../../../services";
import { Settings } from "@material-ui/icons";
import Pages from "../../../utils/constants/pages";
import { useDispatch } from "react-redux";
import { resetAllPermission } from "../../../store/application";

const SettingMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const menus = [
    {
      title: "settings.profile",
      action: () => history.push(Pages.PROFILE),
    },
    {
      title: "settings.logout",
      action: async () => {
        await cognitoService.signOut();
        dispatch(resetAllPermission());
        history.push(Pages.SIGN_IN);
      },
    },
  ];

  return (
    <IconMenu
      color="secondary"
      items={menus}
      onItemClick={async (item) => await item.action()}
      renderItem={(item) => <Typography.Body label={item.title} />}
    >
      <Settings />
    </IconMenu>
  );
};

export default SettingMenu;
