import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const FirstSectionStyled = styled(Box)`
  padding: 73px;
  .title {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 32px;
    /* identical to box height, or 107% */
    text-align: center;
    /* Pine_tree */
    color: #3c635d;
  }
  .subtitle {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 129% */
    text-align: center;
    /* Black_100 */
    color: #3c3c3b;
  }
  .flexEnd {
    display: flex;
    justify-content: flex-end;
  }
  .centerForm {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .forgetPass {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 129% */
    display: flex;
    text-align: center;
    /* Black_100 */
    color: #3c3c3b;
  }
  .createAcount {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 129% */
    display: flex;
    text-align: center;
    /* Black_100 */
    color: #3c3c3b;
  }
  .pointer {
    cursor: pointer;
  }
  // mobile
  @media only screen and (max-width: 960px) {
    padding: 20px;
    .title {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      /* identical to box height, or 117% */
      /* Pine_tree */
      color: #3c635d;
      text-align: start;
    }
    .subtitle {
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
      /* identical to box height, or 133% */
      /* Black_100 */
      color: #3c3c3b;
      text-align: start;
    }
    .marginTopMobil {
      margin-top: 20px;
    }
    .FlexCenter {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .transporteText {
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
      /* or 133% */

      text-align: center;

      /* Black_100 */

      color: #3c3c3b;
    }
  }
`;
