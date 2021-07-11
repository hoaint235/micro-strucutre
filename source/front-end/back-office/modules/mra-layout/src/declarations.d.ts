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

  export const MLogo;
  export const MIconMenu;
  export const MField;
  export const MProvider;
  export const MTypography;
}
