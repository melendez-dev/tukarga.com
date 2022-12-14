import { Box, useMediaQuery } from "@material-ui/core";
import styled from "@emotion/styled";

// import images
import backgroundHeader from "../../assets/images/Hero_oficios.png";
import backgroundHeader2 from "../../assets/images/Hero_oficios3.png";
import backgroundHeader2Mobile from "../../assets/images/Hero_karga.png";

// backgroun opacity

import backgroundOpacity2 from "../../assets/images/Hero_oficiosOpacity.png";
import backgroundOpacity200 from "../../assets/images/Hero_oficiosOpacity100.png";
import backgroundOpacity1 from "../../assets/images/Hero_oficiosOpacity11.png";

export const HeaderStyled = styled(Box)`
  .firstBackground {
    background-image: url(${backgroundHeader});
    height: 100%;
    background-size: cover;
    transition: all 0.5s ease;
    background-position: center;
  }
  .firstBackground2 {
    background-image: url(${backgroundHeader});
    background-size: cover;
    transition: all 0.5s ease;
    background-position: center;
  }
  .secondBackground {
    background-image: url(${backgroundHeader2});
    height: 100%;
    background-size: cover;
    transition: all 0.5s ease;
  }

  // DESKTOP BACKGROUNG
  .desktopBackground1 {
    background-image: url(${backgroundHeader});
    height: 640px;
    background-size: cover;
    transition: all 0.5s ease;
    background-position: center;
  }
  .desktopBackground2 {
    background-image: url(${backgroundOpacity2});
    background-size: cover;
    transition: all 0.5s ease;
  }
  .desktopBackground2:hover {
    background-image: url(${backgroundOpacity200});
  }
  .desktopBackground2hover {
    background-image: url(${backgroundOpacity200});
  }
  // change desktopBackground1 when desktopBackground2 hover

  .desktopBackgroundOpacity1 {
    background-image: url(${backgroundOpacity1});
    background-size: cover;
    transition: all 0.5s ease;
    background-position: center;
  }

  // Desktop text
  .leftTextSide {
    padding: 80px;
    margin-top: 250px;
  }

  .fixedBotton {
    display: flex;
    align-items: flex-end;
    height: 654px;
    padding: 10px 73px;
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
  .titleGreen {
    font-weight: 500;
    font-size: 36px;
    line-height: 40px;
    color: #3c635d;
    display: block;
  }
  .subtitleGreen {
    font-weight: 500;
    font-size: 24px;
    color: #3c635d;
    line-height: 40px;
    display: block;
  }
  .text_lightGreen {
    font-weight: 500;
    color: #3c635d;
    font-size: 14px;
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
  .marginLeftCard {
    padding-top: 6%;
  }
  // mobile
  @media only screen and (max-width: 960px) {
    .title {
      font-size: 24px;
      line-height: 28px;
    }
    .subtitle {
      font-size: 12px;
      line-height: 16px;
      margin-top: 8px;
    }
    .secondBackground {
      background-image: url(${backgroundHeader2Mobile});
    }
  }
`;
