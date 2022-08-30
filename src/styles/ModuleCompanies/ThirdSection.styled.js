import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const ThirdSectionStyled = styled(Box)`
  padding: 73px;
  .title {
    font-weight: 400;
    font-size: 30px;
    line-height: 32px;
    color: #3c635d;
    margin-bottom: 56px;
  }

  // mobile
  @media (max-width: 930px) {
    padding: 30px 0px;
    .title {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      /* identical to box height, or 120% */

      /* Pine_tree */

      color: #3c635d;
    }
  }
`;
