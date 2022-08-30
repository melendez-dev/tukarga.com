import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const FirstSectionStyled = styled(Box)`
  padding: 73px;
  .title {
    font-weight: 400;
    font-size: 30px;
    color: #3c635d;
    line-height: 32px;
    max-width: 432px;
    margin-bottom: 56px;
  }
  // mobile
  @media (max-width: 930px) {
		padding: 0px;
		margin: 20px 0px;
    .title {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      /* or 120% */
      color: #3c635d;
      margin: 0px;
    }
  }
`;
