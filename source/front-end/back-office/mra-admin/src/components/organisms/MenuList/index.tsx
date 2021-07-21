import { makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { MenuItem } from "../../molecules";
import { Menus } from "../../../configurations";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    alignItems: "flex-start",
    height: "calc(100vh - 104px)",
    display: "block",
  },
}));

const MenuList = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {Menus.map((menu: MenuItemProps, index: number) => (
        <MenuItem key={index} {...menu} />
      ))}
    </div>
  );
};

export default MenuList;
