import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const FourSectionStyled = styled(Box)`
  background: #fcfced;

  padding-top: 100px;
  padding-bottom: 100px;
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
    width: 60%;
  }
  .centerImage {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;