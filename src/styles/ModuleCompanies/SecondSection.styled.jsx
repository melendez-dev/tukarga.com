import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const SecondSectionStyled = styled(Box)`
  padding: 97px;
  background: #fcfced;
  .text {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #3c3c3b;
    width: 70%;
  }
  .mb {
    margin-bottom: 30px;
  }
  .centerBox {
    display: flex;
    align-items: center;
  }
  .centerIlustraion {
    display: flex;
    justify-content: center;
  }
  // mobile
  @media (max-width: 930px) {
    overflow: hidden;
    padding: 20px 0px;
    .text {
      width: 70%;
    }
  }
`;
