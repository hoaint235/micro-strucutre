import React from "react";
import { useHistory } from "react-router";

const Logo = () => {
  const histoty = useHistory();

  const backToHome = (e) => {
    e.preventDefault();
    histoty.push("/");
  };

  return (
    <a href="#" onClick={backToHome}>
      <img src="/images/logo.svg" alt="logo" />
    </a>
  );
};

export default Logo;
