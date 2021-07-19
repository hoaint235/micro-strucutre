declare module "@mra/utility" {
  export const API: any;
  export const resources: any;
  export const Cognito: AwsCognito;
}

declare module "@mra/layout";
declare module "@mra/theme" {
  export {
    Box,
    Hidden,
    Collapse,
    IconButton,
    Avatar,
    fade,
    makeStyles,
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
    TextField,
    TextFieldProps,
    InputAdornment,
  } from "@material-ui/core";

  export const MLogo;
  export const MIconMenu;
  export const SearchField;
  export const MProvider;
  export const MButton;
  export const MTypography;
}
