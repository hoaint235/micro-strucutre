declare module "@mra/utility" {
  export const resources;
  export const Cognito: AwsCognito;
}

declare module "@mra/theme" {
  export {
    Box,
    Hidden,
    IconButton,
    Avatar,
    fade,
    makeStyles,
    Typography,
    Theme,
    useMediaQuery,
    Grid,
    Drawer,
    Toolbar,
    AppBar,
    Paper,
    ListItem,
    ListItemIcon,
    ListItemText,
    CardContent,
    Container,
    Card,
  } from "@material-ui/core";

  export const Label;
  export const Logo;
  export const IconMenu;
  export const SearchField;
  export const UIProvider;
  export const Body;
}
