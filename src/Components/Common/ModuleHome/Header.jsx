import { Box, Container, Grid } from "@material-ui/core";
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

// context
import { MobileContext } from "../../../context/MobileContext";
import { BrandContext } from "../../../context/BrandContext";
// use the contex
import { useContext } from "react";

export default function Header() {
  // KNOW IF IS MOBILE
  const isMobile = useContext(MobileContext);
  // KNOW THE BRAND
  const { brand, setBrand } = useContext(BrandContext);

  return (
    <HeaderStyled>
      <Box
        className={brand ? "secondBackground" : "firstBackground"}
        style={{ minHeight: isMobile ? "513px" : undefined }}
      >
        <HeaderBanner dark={false} toggle={brand} />
        <Container>
          <Box className={!isMobile ? "fixedBotton" : undefined}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextLeft toggle={brand} isMobile={isMobile} />
              </Grid>
              {!isMobile && (
                <Grid item xs={6}>
                  <Box className="marginLeftCard">
                    {!brand ? (
                      <>
                        <CardWithImage
                          img={quintigillar}
                          title="Tukarga, plataforma tecnológica de servicios logísticos."
                          subtitle="Conoce y empieza un nuevo servicio!"
                          textButton="Conocer más"
                          setToggle={setBrand}
                          isMobile={!isMobile}
                        />
                      </>
                    ) : (
                      <>
                        <CardWithImage
                          img={hero_bg}
                          title="¡Despreocúpate de las entregas, Oficios by tuKarga lo hace por ti!"
                          subtitle="Solicita tu servicio ahora!"
                          textButton="Solicitar servicio"
                          setToggle={setBrand}
                          isMobile={!isMobile}
                        />
                      </>
                    )}
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
    </HeaderStyled>
  );
}
