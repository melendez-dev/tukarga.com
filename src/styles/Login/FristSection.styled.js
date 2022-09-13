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
`;
