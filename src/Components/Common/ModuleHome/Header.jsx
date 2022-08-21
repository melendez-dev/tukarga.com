import { useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@material-ui/core";
// import styles
import { HeaderStyled } from "../../../styles/ModuleHome/header.styled";
// import icons
import { ReactComponent as Logo } from "../../../assets/svg/Logo_white_1.svg";

// import Links
import Links from "../../Shared/Link/Links";
import TextLeft from "../../../Atom/ModuleHome/Header/TextLeft";
// import CardWithImage
import CardWithImage from "../../Shared/Card/CardWithImage";

// images
import quintigillar from "../../../assets/images/quintingellar.png";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <HeaderStyled>
      <Box className={toggle ? "secondBackground" : "firstBackground"}>
        <Container>
          <Box className="header_link_logo">
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Logo />
              </Grid>
              <Grid item xs={4}>
                <Links toggle={toggle} />
              </Grid>
            </Grid>
          </Box>
          <Box className="fixedBotton">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextLeft />
              </Grid>
              <Grid item xs={6}>
                <Box className="marginLeftCard">
                  <CardWithImage
                    img={quintigillar}
                    title="Tukarga, plataforma tecnológica de servicios logísticos."
                    subtitle="Conoce y empieza un nuevo servicio!"
                    textButton="Conocer más"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </HeaderStyled>
  );
}
