import { Box } from "@material-ui/core";
import styled from "@emotion/styled";

// import images
import backgroundHeader from "../../assets/images/Hero_oficios.png";
import backgroundTwo from "../../assets/images/backgroundTwo.jpg";

export const HeaderStyled = styled(Box)`
  .firstBackground {
    background-image: url(${backgroundHeader});
    height: 100%;
    background-size: cover;
    transition: all 0.5s ease;
  }
  .secondBackground {
    background-image: url(${backgroundTwo});
    height: 100%;
    background-size: cover;
    transition: all 0.5s ease;
  }
  .header_link_logo {
    padding-top: 10px;
  }
  .container_links {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .links_header_light {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
  }
  .links_header_login {
    text-decoration: none;
    color: #000;
    font-size: 10px;
  }
  .links_header_black {
    text-decoration: none;
    color: #000;
    font-size: 14px;
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
  .fixedBotton {
    display: flex;
    align-items: flex-end;
    height: 654px;
    padding-bottom: 8%;
  }
  .title {
    font-weight: 500;
    font-size: 36px;
    line-height: 40px;
    color: #ffffff;
    display: block;
  }
  .subtitle {
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    color: #ffffff;
    display: block;
  }
  .text_light {
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    display: block;
  }
  .containerButton {
    margin-top: 20px;
  }
  .text_light_button {
    font-size: 14px;
    color: #ffffff;
    display: block;
    text-decoration: none;
	}
	.marginLeftCard{
		margin-left: 15%;
	}
`;
