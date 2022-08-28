import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const FirstStyled = styled(Box)`
  padding: 6%;
  .containerIlustration {
    display: flex;
    flex-direction: column;
  }
  .text_light_button {
    font-size: 14px;
    color: #ffffff;
    display: block;
    text-decoration: none;
  }
  .marginBottom {
    margin-bottom: 40px;
  }
  .titleFirstSec {
    font-weight: 400;
    font-size: 30px;
    color: #3c635d;
    line-height: 32px;
  }
  /*toggle*/
  .titleToggle {
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
    color: #3c635d;
    margin-bottom: 16px;
  }
  .subtitleToggle {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    margin-bottom: 40px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .centerEvenly {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .textCard {
    line-height: 24px;
    color: #3c635d;
    font-size: 20px;
    text-align: center;
    margin-bottom: 40px;
  }
  // mobile
  @media only screen and (max-width: 960px) {
    .titleFirstSec {
      font-size: 20px;
    }
  }
`;
