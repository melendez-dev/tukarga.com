import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

// images
import heroKarga from "../../assets/images/Hero_kargaMobile.png";

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
    padding: 0px;
    overflow: hidden;
    .titleFirstSec {
      font-size: 20px;
    }
    .titleToggle {
      font-size: 20px;
    }
    .heroKarga {
      background-image: url(${heroKarga});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 356px;
      padding: 24px;
    }
    .titleView {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      /* or 117% */

      /* Black_100 */

      color: #3c3c3b;
      margin-bottom: 8px;
    }
    .subtitleView {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #3c3c3b;
      margin-bottom: 10px;
    }
    .textView {
      width: 272px;
      height: 48px;

      /* Body */

      font-family: "Commissioner";
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
      /* or 133% */

      /* Black_100 */

      color: #3c3c3b;
    }
    .buttonText {
      font-weight: 400;
      font-size: 8px;
      line-height: 16px;
      /* identical to box height, or 133% */
      width: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      color: #d74723;
    }
    .marginTopView {
      margin-top: 56px;
    }
  }
`;
