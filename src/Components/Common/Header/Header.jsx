import Links from "../../Shared/Link/Links";
import { ReactComponent as Logo } from "../../../assets/svg/Logo_white_1.svg";
import { ReactComponent as LogoDark } from "../../../assets/svg/Logo 1.svg";
import { HeaderStyled } from "../../../styles/Header.styled";
import { Grid, Box, useMediaQuery } from "@material-ui/core";

export default function Header({ dark = false }) {
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
            {dark ? <LogoDark /> : <Logo />}
          </Grid>
          <Grid
            item
            xs={8}
            md={6}
            style={{
              display: isMobile ? "flex" : undefined,
              justifyContent: isMobile ? "flex-end" : undefined,
              alignItems: isMobile ? "center" : undefined,
            }}
          >
            <Links dark={dark} />
          </Grid>
        </Grid>
      </Box>
    </HeaderStyled>
  );
}
