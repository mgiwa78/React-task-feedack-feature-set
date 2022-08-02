import styled from "styled-components/macro";
import { ReactComponent as MobileCLoseIcon } from "../../assets/shared/mobile/icon-hamburger.svg";
import MobileHederbg from "../../assets/suggestions/mobile/background-header.png";

export const HeaderContainer = styled.div`
  background-image: url(${MobileHederbg});
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0px 20px;
`;
export const HeaderTextContainer = styled.div`
  font-size: 15px;
  width: max-content;
  color: #fff;
`;
export const HeaderText = styled.h2`
  font-weight: 600;
  font-size: 15px;
  color: #fff;
`;
export const HeaderSubText = styled.h4`
  font-weight: 400;

  font-size: 13px;
  color: rgba(255, 255, 255, 0.489);
`;
export const HeaderIcon = styled(MobileCLoseIcon)``;
export const HeaderLogoBox = styled(MobileCLoseIcon)`
  margin-right: 40px;
`;
