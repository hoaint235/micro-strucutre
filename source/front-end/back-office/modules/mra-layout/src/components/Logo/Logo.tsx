import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "inline-flex",
    justifyContent: "center",
    webkitBoxPack: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
  },
}));

export type LogoProps = {
  src: string;
  alt?: string;
  onClick: (event) => void;
};

const Logo = (props: LogoProps) => {
  const { src, alt, onClick } = props;
  const classes = useStyles();

  return (
    <a href="/" className={classes.root} tabIndex={-1} onClick={onClick}>
      <img src={src} alt={alt} />
    </a>
  );
};

export default Logo;
