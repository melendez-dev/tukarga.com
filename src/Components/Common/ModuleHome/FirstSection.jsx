import { useContext } from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
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

// context
import { MobileContext } from "../../../context/MobileContext";
import { BrandContext } from "../../../context/BrandContext";
import { LandingViewContext } from "../../../context/LadingViewContext";

export default function FirstSection() {
  const isMobile = useContext(MobileContext);
  const { brand, setBrand } = useContext(BrandContext);
  const { landingView } = useContext(LandingViewContext);
  return (
    <>
      <FirstStyled>
        {!brand ? (
          <>
            <Grid
              container
              spacing={3}
              style={{ display: brand ? "block" : "flex" }}
            >
              {!isMobile ? (
                <>
                  <Grid
                    item
                    xs={2}
                    md={6}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <LeftIlustration />
                  </Grid>
                </>
              ) : (
                <>
                  {!brand && (
                    <>
                      {landingView ? (
                        <>
                          <Box className="heroKarga">
                            <Container>
                              <Box>
                                <Typography className="titleView">
                                  <b>Tukarga es la primera plataforma</b>
                                </Typography>
                                <Typography className="subtitleView">
                                  tecnol??gica de servicios log??sticos.
                                </Typography>
                                <Typography className="textView">
                                  ??Con una gama completa de servicios, somos una
                                  soluci??n integral para todas las necesidades
                                  de su negocio!
                                </Typography>
                              </Box>
                              <Box className="marginTopView">
                                <Button
                                  variant="outlined"
                                  style={{
                                    width: "103px",
                                    height: "32px",
                                    border: "1px solid #D74723",
                                    borderRadius: "8px",
                                  }}
                                  onClick={() => setBrand(!brand)}
                                >
                                  <span className="buttonText">
                                    Conocer m??s
                                  </span>
                                </Button>
                              </Box>
                            </Container>
                          </Box>
                        </>
                      ) : (
                        <>
                          <CardWithImage
                            img={!isMobile ? quintigillar_mobile : quintigillar}
                            title="??Despreoc??pate de las entregas, Oficios by tuKarga lo hace por ti!"
                            textButton="Conocer m??s"
                            subtitle="Solicita tu servicio ahora!"
                            setToggle={setBrand}
                            toggle={brand}
                          />
                        </>
                      )}
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
                {brand && (
                  <>
                    {landingView ? (
                      <>
                        <Box className="heroKargaBgM">
                          <Container>
                            <Box>
                              <Typography className="titleView">
                                <b>??Despreoc??pate</b>
                                <Box>
                                  <b>de las entregas,</b>
                                </Box>
                              </Typography>
                              <Typography className="subtitleView">
                                Oficios by tuKarga lo hace por ti!
                              </Typography>
                              <Typography className="textView">
                                Con la ayuda de nuestra red de m??s de 4000
                                profesionales, llevamos tus env??os a tiempo.
                              </Typography>
                            </Box>
                            <Box className="marginTopView">
                              <Button
                                variant="outlined"
                                style={{
                                  width: "103px",
                                  height: "32px",
                                  border: "1px solid #D74723",
                                  borderRadius: "8px",
                                }}
                                onClick={() => setBrand(!brand)}
                              >
                                <span className="buttonText">Conocer m??s</span>
                              </Button>
                            </Box>
                          </Container>
                        </Box>
                      </>
                    ) : (
                      <>
                        <CardWithImage
                          img={hero_bg}
                          title="Tukarga, plataforma tecnol??gica de servicios log??sticos."
                          subtitle="Conoce y empieza un nuevo servicio!"
                          textButton="Solicitar servicio"
                          setToggle={setBrand}
                          toggle={brand}
                        />
                      </>
                    )}
                  </>
                )}
              </>
            )}
            <ToggleFirstSection />
          </>
        )}
      </FirstStyled>
    </>
  );
}
