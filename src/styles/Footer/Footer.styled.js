import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const FooterStyled = styled(Box)`
  background: #3c3c3b;
  padding: 73.45px;
  .textLink {
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    cursor: pointer;
    margin-top: 16px;
  }
  .textNormal {
    color: #fcfced;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flexCenter {
    display: flex;
    align-items: center;
  }
  .flexCenterCenter {
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    margin-top: 30px;
  }
  .containerIcons {
    height: 48px;
    display: flex;
    align-items: center;
  }
  .pointer {
    cursor: pointer;
  }
  .marginY {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  // mobile
  @media only screen and (max-width: 960px) {
    padding: 10px 0px;
    .flexCenterCenter {
      margin-top: 0px;
    }
  }
`;
