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

  .links_header_login {
    text-decoration: none;
    color: #000;
    font-size: 10px;
  }
  // a hover with after
  .links_header_light:hover {
    color: #ff6600;
    height: 30px;
    border-bottom: 2px solid #ff6600;
  }
  .links_header_black:hover {
    color: #ff6600;
    height: 30px;
    border-bottom: 2px solid #ff6600;
  }

  .link_selected {
    text-decoration: none;
    font-size: 14px;
    color: #ff6600;
    height: 30px;
    border-bottom: 2px solid #ff6600;
  }
  // query max 960px
  @media only screen and (max-width: 960px) {
    .white {
      background: #fff;
    }
    .black {
      background: #3c3c3b;
    }
    //padding: 0px 10px;
    .header_link_logo {
      padding: 10px 0px;
      max-width: 100%;
    }
    a {
      color: white;
    }
  }
`;
