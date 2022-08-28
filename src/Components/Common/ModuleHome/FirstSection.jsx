import { Container, Grid, useMediaQuery } from "@material-ui/core";
import { FirstStyled } from "../../../styles/ModuleHome/FirstSection.styled";

// impor Atoms
import LeftIlustration from "../../../Atom/ModuleHome/FirstSection/LeftIlustration";
import RightSide from "../../../Atom/ModuleHome/FirstSection/RightSide";
import ToggleFirstSection from "../../../Atom/ModuleHome/FirstSection/ToggleFirstSection";

//img
import quintigillar from "../../../assets/images/quintingellar.png";
import hero_bg from "../../../assets/images/Oficios_Hero_BG.png";
// img mobile

import quintigillar_mobile from "../../../assets/images/pexels-quintin-gellar-2199293 1.png";

// import CardWithImage
import CardWithImage from "../../../Components/Shared/Card/CardWithImage";

export default function FirstSection({ toggle, setToggle }) {
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <>
      <Container>
        <FirstStyled>
          {!toggle ? (
            <>
              <Grid container spacing={3}>
                {!isMobile ? (
                  <>
                    <Grid item xs={6}>
                      <LeftIlustration />
                    </Grid>
                  </>
                ) : (
                  <>
                    {!toggle && (
                      <>
                        <CardWithImage
                          img={!isMobile ? quintigillar_mobile : quintigillar}
                          title="Tukarga, plataforma tecnológica de servicios logísticos."
                          subtitle="Conoce y empieza un nuevo servicio!"
                          textButton="Conocer más"
                          setToggle={setToggle}
                        />
                      </>
                    )}
                  </>
                )}

                <Grid item xs={12} md={6}>
                  <RightSide isMobile={isMobile} />
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              {isMobile && (
                <>
                  {toggle && (
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
                </>
              )}
              <ToggleFirstSection />
            </>
          )}
        </FirstStyled>
      </Container>
    </>
  );
}
