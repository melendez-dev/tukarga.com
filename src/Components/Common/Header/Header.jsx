import Links from "../../Shared/Link/Links";
import { ReactComponent as Logo } from "../../../assets/svg/Logo_white_1.svg";
import { ReactComponent as LogoDark } from "../../../assets/svg/Logo 1.svg";
import { HeaderStyled } from "../../../styles/Header.styled";
import { Grid, Box, useMediaQuery } from "@material-ui/core";

export default function Header({ dark = false, darkLink }) {
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <HeaderStyled>
      <Box className="header_link_logo">
        <Grid
          container
          spacing={3}
          style={{
            maxWidth: "100%",
          }}
        >
          <Grid item xs={4} md={6}>
            {isMobile ? <Logo /> : dark ? <LogoDark /> : <Logo />}
          </Grid>
          <Grid item xs={8} md={6}>
            <Links dark={dark} darkLink={darkLink} isMobile={isMobile} />
          </Grid>
        </Grid>
      </Box>
    </HeaderStyled>
  );
}
