import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const CustomButton = styled(Box)`
  .selected {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 9px;
    gap: 8px;
    width: 66px;
    height: 66px;
    cursor: pointer;
    stroke: #fff;

    /* Pine_tree */

    background: #3c635d;
    border-radius: 18px;
  }
  .notSelected {
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    padding: 9px;
    gap: 8px;
    fill: #fff;
    stroke: #3c635d;
    width: 66px;
    height: 66px;

    /* Pine_tree */

    border: 2px solid #3c635d;
    border-radius: 18px;
  }
`;
