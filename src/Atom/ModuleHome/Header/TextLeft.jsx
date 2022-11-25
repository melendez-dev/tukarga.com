import { useContext } from "react";
// react-router-dom
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@material-ui/core";
// view context
import { LandingViewContext } from "../../../context/LadingViewContext";
import { BrandContext } from "../../../context/BrandContext";
import { MobileContext } from "../../../context/MobileContext";
export default function TextLeft({ toggle, changeColor }) {
  // context
  const { landingView } = useContext(LandingViewContext);
  const { brand } = useContext(BrandContext);
  const isMobile = useContext(MobileContext);
  return (
    <>
      {isMobile ? (
        <>
          <Box style={{ marginTop: "17px" }}>
            <Typography className="title">
              {landingView ? (
                <>
                  {brand ? (
                    <>
                      <Box>
                        <b>Tukarga es la </b>
                      </Box>
                      <b> primera plataforma</b>
                    </>
                  ) : (
                    <>
                      <Box>
                        <b>¡Despreocúpate </b>
                      </Box>
                      <b>de las entregas, </b>
                    </>
                  )}
                </>
              ) : (
                <>
                  <b>{"Tukarga es la "}</b>
                  <b>{"primera plataforma"}</b>
                </>
              )}
            </Typography>
            <Typography className="subtitle" style={{ fontSize: "18px" }}>
              {landingView ? (
                <>
                  {brand ? (
                    <>tecnológica de servicios logísticos.</>
                  ) : (
                    <>Oficios by tuKarga lo hace por ti!</>
                  )}
                </>
              ) : (
                <>{"tecnológica de servicios logísticos."}</>
              )}
            </Typography>
            <Typography className="subtitle">
              {landingView ? (
                <>
                  {brand ? (
                    <>
                      ¡Con una gama completa de servicios, somos una solución
                      integral para todas las necesidades de su negocio!
                    </>
                  ) : (
                    <>
                      Con la ayuda de nuestra red de más de 4000 profesionales,
                      llevamos tus envíos a tiempo.
                    </>
                  )}
                </>
              ) : (
                <>
                  {"¡Con una gama completa de servicios, somos una"}
                  {
                    "solucioń integral para todas las necesidades de su negoció!"
                  }
                </>
              )}
            </Typography>
            <Box>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ff6600",
                  color: "#fff",
                  borderRadius: "8px",
                  marginTop: "20px",
                }}
              >
                <Link
                  to={!toggle ? "/quotation" : "/login"}
                  className="text_light_button"
                  style={{
                    fontSize: "12px",
                    textTransform: "capitalize",
                  }}
                >
                  {!toggle ? "Cotizar ahora" : "Iniciar sesión"}
                </Link>
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Typography className={changeColor ? "titleGreen" : "title"}>
            <b>{!toggle ? "¡Despreocúpate" : "Tukarga es la"}</b>
          </Typography>
          <Typography className={changeColor ? "titleGreen" : "title"}>
            <b>{!toggle ? "De las entregas," : "primera plataforma"}</b>
          </Typography>
          <Typography className={changeColor ? "subtitleGreen" : "subtitle"}>
            {!toggle
              ? "Oficios By TuKarga lo hace por ti!"
              : "Tecnológica de servicios logísticos."}
          </Typography>
          <Typography
            className={changeColor ? "text_lightGreen" : "text_light"}
            style={{ marginTop: "10px" }}
          >
            {!toggle
              ? "Con la ayuda de nuestra red de más de 4000 profesionales,"
              : "¡Con una gama completa de servicios, somos una"}
          </Typography>
          <Typography
            className={changeColor ? "text_lightGreen" : "text_light"}
          >
            {!toggle
              ? "llevamos tus envíos a tiempo."
              : "solucioń integral para todas las necesidades de su negoció!"}
          </Typography>
          <Box>
            <Button
              variant={changeColor ? "outlined" : "contained"}
              style={{
                backgroundColor: changeColor ? undefined : "#ff6600",
                color: changeColor ? "#ff6600" : "#fff",
                borderColor: changeColor ? "#ff6600" : undefined,
                borderRadius: "8px",
                marginTop: "20px",
              }}
            >
              <a
                href={!toggle ? "https://admin.tukarga.com/" : "/login"}
                className="text_light_button"
                style={{
                  fontSize: "12px",
                  textTransform: "capitalize",
                  color: changeColor ? "#ff6600" : "#fff",
                }}
              >
                {!toggle ? "Cotizar ahora" : "Iniciar sesión"}
              </a>
            </Button>
          </Box>
        </>
      )}
    </>
  );
}
