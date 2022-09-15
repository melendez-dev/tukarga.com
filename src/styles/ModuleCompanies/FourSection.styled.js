import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const FourSectionStyled = styled(Box)`
  padding: 73px;
  background: #fcfced;
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
  // mobile
  @media (max-width: 960px) {
    padding: 0px;
    margin-bottom: 27px;
    .title {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      /* or 120% */

      /* Pine_tree */

      color: #3c635d;
    }
    .subtitle {
      font-size: 12px;
    }
  }
`;
