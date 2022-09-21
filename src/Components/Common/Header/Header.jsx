import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MobileContext } from "../../../context/MobileContext";
import { BrandContext } from "../../../context/BrandContext";
import { LandingViewContext } from "../../../context/LadingViewContext";
import Links from "../../Shared/Link/Links";
import { ReactComponent as Logo } from "../../../assets/svg/Logo_white_1.svg";
import { ReactComponent as LogoDark } from "../../../assets/svg/Logo 1.svg";
import { ReactComponent as Tukarga } from "../../../assets/svg/Logo-Tukarga-final-original_blanco 1.svg";
import { ReactComponent as TukargaDark } from "../../../assets/svg/image 1.svg";
import { ReactComponent as TukargaM } from "../../../assets/svg/Logo-Tukarga-final-original_blanco 1M.svg";
import { HeaderStyled } from "../../../styles/Header.styled";
import { Grid, Box } from "@material-ui/core";

export default function Header({
  dark = false,
  darkLink,
  toggle,
  changeColor,
}) {
  const isMobile = useContext(MobileContext);
  const { brand } = useContext(BrandContext);
  const { setLandingView } = useContext(LandingViewContext);
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <Box
        className={dark ? "white header_link_logo" : "black header_link_logo"}
      >
        <Grid
          container
          spacing={3}
          style={{
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={6} md={7}>
            <Box
              style={{
                marginLeft: isMobile ? "10px" : "0px",
              }}
              onClick={() => {
                setLandingView(true);
                navigate("/");
              }}
            >
              {!brand ? (
                dark || changeColor ? (
                  changeColor ? (
                    <LogoDark />
                  ) : (
                    <LogoDark />
                  )
                ) : (
                  <Logo />
                )
              ) : dark || changeColor ? (
                <TukargaDark />
              ) : (
                <TukargaM />
              )}
            </Box>
          </Grid>
          <Grid item xs={6} md={5}>
            <Links
              dark={dark}
              darkLink={darkLink}
              isMobile={isMobile}
              changeColor={changeColor}
            />
          </Grid>
        </Grid>
      </Box>
    </HeaderStyled>
  );
}
