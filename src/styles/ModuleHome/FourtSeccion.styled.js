import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const FourSectionStyled = styled(Box)`
  background: #fcfced;

  padding-top: 100px;
  padding-bottom: 100px;
  .container {
    margin-left: "40px";
  }
  .marginTop {
    margin-top: 10px;
  }
  .title {
    font-size: 30px;
    font-weight: 400;
    color: #3c635d;
    line-height: 32px;
  }
  .subtitle {
    font-size: 14px;
    font-weight: 300;
    color: #3c3c3b;
    line-height: 18px;
    margin-top: 24px;
    margin-bottom: 24px;
    width: 90%;
  }
  .centerImage {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // toggle
  .boxToggleRelative {
    position: relative;
    height: 267px;
  }
  .boxToggleAbs {
    position: absolute;
    top: 0;
  }
  .centerImageToggle {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .titleToggle {
    font-weight: 400;
    font-size: 30px;
    line-height: 32px;
    text-align: center;
    color: #3c635d;
  }
  .subtitleToggle {
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #3c635d;
  }
  .centerTextToggle {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .centerIcons {
    display: flex;
    align-items: center;
  }
  .centerPadding {
    padding: 0 73px;
  }
`;
