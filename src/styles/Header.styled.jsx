import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

export const HeaderStyled = styled(Box)`
  .links_header_light {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
  }
  .links_header_black {
    text-decoration: none;
    color: #000;
    font-size: 14px;
  }
  .container_links {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .header_link_logo {
    padding: 10px 73px;
  }
`;
