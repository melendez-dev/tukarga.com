import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

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
`;
