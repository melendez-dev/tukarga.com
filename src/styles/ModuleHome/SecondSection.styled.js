import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const SecondSectionStyled = styled(Box)`
  background: #fcfced;
  padding-top: 100px;
  padding-bottom: 100px;

  .container {
    padding: 0px 73px;
  }
  .title {
    font-weight: 400;
    font-size: 30px;
    line-height: 32px;
    color: #3c635d;
  }
  .paddingTop {
    padding-top: 24px;
    padding-bottom: 24px;
    width: 50%;
  }
  .text {
    font-size: 14px;
    line-height: 18px;
    font-weight: 300;
    color: #3c3c3b;
  }
  .centerIlustration {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // toggle
  .titleToggle {
    color: #3c635d;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 24px;
    width: 50%;
  }
  .subtitleToggle {
    font-weight: 300;
    line-height: 18px;
    color: #3c3c3b;
    margin-bottom: 24px;
  }
  // mobile
  @media only screen and (max-width: 960px) {
    padding-top: 24px;
    padding-bottom: 24px;

    .container {
      padding: 24px;
    }
    .title {
      font-size: 20px;
		}
  }
`;
