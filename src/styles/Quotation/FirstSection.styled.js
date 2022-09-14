import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const FirstSectionStyled = styled(Box)`
  background-color: #fcfced;
  padding: 16px 24px 24px 24px;
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */
    /* Pine_tree */
    color: #3c635d;
  }
  .subtitle {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #3c3c3b;
  }
  .marginTop {
    margin-top: 8px;
  }
  .marginTopButton {
    margin-top: 116px;
  }
  .buttonCancel {
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #d74723;
  }
  .buttonNext {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
`;
