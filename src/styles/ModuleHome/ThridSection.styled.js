import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const ThridSectionStyled = styled(Box)`
  padding-top: 72px;
  padding-bottom: 72px;
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    color: #3c635d;
    line-height: 32px;
  }
  .subtitle {
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    color: #3c3c3b;
    margin-top: 16px;
    margin-bottom: 48px;
  }
  .centerImg {
    display: flex;
    justify-content: center;
  }
  // toggle
  .containerToggle {
    padding: 0px 73px;
  }
  .titleToggle {
    font-weight: 400;
    font-size: 30px;
    line-height: 32px;
    color: #3c635d;
    margin-bottom: 24px;
  }
  .subtitleToggle {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #3c3c3b;
    margin-bottom: 24px;
    width: 60%;
  }
  // mobil
  @media only screen and (max-width: 960px) {
    padding-top: 24px;
    padding-bottom: 24px;

    .title {
      font-size: 24px;
      text-align: start;
    }
    .subtitle {
      text-align: start;
    }
    .containerToggle {
      padding: 0px;
    }
    .centerIlustration {
      display: none;
    }
  }
`;
