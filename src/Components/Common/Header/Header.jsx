import { useContext } from "react";
import { MobileContext } from "../../../context/MobileContext";
import Links from "../../Shared/Link/Links";
import { ReactComponent as Logo } from "../../../assets/svg/Logo_white_1.svg";
import { ReactComponent as LogoDark } from "../../../assets/svg/Logo 1.svg";
import { HeaderStyled } from "../../../styles/Header.styled";
import { Grid, Box } from "@material-ui/core";

export default function Header({ dark = false, darkLink }) {
  const isMobile = useContext(MobileContext);
  return (
    <HeaderStyled>
      <Box className="header_link_logo">
        <Grid
          container
          spacing={3}
          style={{
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={6} md={6}>
            {isMobile ? <Logo /> : dark ? <LogoDark /> : <Logo />}
          </Grid>
          <Grid item xs={6} md={6}>
            <Links dark={dark} darkLink={darkLink} isMobile={isMobile} />
          </Grid>
        </Grid>
      </Box>
    </HeaderStyled>
  );
}
