import React from "react";
import {
  HeaderContainer,
  HeaderIcon,
  HeaderLogoBox,
  HeaderSubText,
  HeaderText,
  HeaderTextContainer,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTextContainer>
        <HeaderText>Frontend Mentor </HeaderText>
        <HeaderSubText>Feedback Board</HeaderSubText>
      </HeaderTextContainer>
      <HeaderLogoBox>
        <HeaderIcon />
      </HeaderLogoBox>
    </HeaderContainer>
  );
};

export default Header;
