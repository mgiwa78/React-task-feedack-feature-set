import React from "react";
import Header from "../header/header.component";
import {
  NavContainer,
  NavLowerContainer,
  NavUpperContainer,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <NavContainer>
      <NavUpperContainer>
        <Header />
      </NavUpperContainer>
      <NavLowerContainer></NavLowerContainer>
    </NavContainer>
  );
};

export default Navigation;
