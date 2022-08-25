import { Box, Container, Grid, Typography, Button } from "@material-ui/core";
// import styles
import { HeaderStyled } from "../../../styles/ModuleHome/header.styled";
// import icons

// import Header
import HeaderBanner from "../../Common/Header/Header";
import TextLeft from "../../../Atom/ModuleHome/Header/TextLeft";
// import CardWithImage
import CardWithImage from "../../Shared/Card/CardWithImage";

// images
import quintigillar from "../../../assets/images/quintingellar.png";
import hero_bg from "../../../assets/images/Oficios_Hero_BG.png";
export default function Header({ toggle, setToggle }) {
  return (
    <HeaderStyled>
      <Box className={toggle ? "secondBackground" : "firstBackground"}>
        <Container>
          <HeaderBanner toggle={toggle} />
          <Box className="fixedBotton">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextLeft toggle={toggle} />
              </Grid>
              <Grid item xs={6}>
                <Box className="marginLeftCard">
                  {!toggle ? (
                    <>
                      <CardWithImage
                        img={quintigillar}
                        title="Tukarga, plataforma tecnológica de servicios logísticos."
                        subtitle="Conoce y empieza un nuevo servicio!"
                        textButton="Conocer más"
                        setToggle={setToggle}
                      />
                    </>
                  ) : (
                    <>
                      <CardWithImage
                        img={hero_bg}
                        title="¡Despreocúpate de las entregas, Oficios by tuKarga lo hace por ti!"
                        subtitle="Solicita tu servicio ahora!"
                        textButton="Solicitar servicio"
                        setToggle={setToggle}
                      />
                    </>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </HeaderStyled>
  );
}
