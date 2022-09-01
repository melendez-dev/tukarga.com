// react-router-dom
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@material-ui/core";
export default function TextLeft({ toggle, isMobile }) {
  return (
    <>
      {isMobile ? (
        <>
          <Box style={{ marginTop: "17px" }}>
            <Typography className="title">
              <b>{"Tukarga es la "}</b>
              <b>{"primera plataforma"}</b>
            </Typography>
            <Typography className="subtitle" style={{ fontSize: "18px" }}>
              {"tecnológica de servicios logísticos."}
            </Typography>
            <Typography className="subtitle">
              {"¡Con una gama completa de servicios, somos una"}
              {"solucioń integral para todas las necesidades de su negoció!"}
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
                  to={!toggle ? "/contacto" : "/login"}
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
          <Typography className="title">
            <b>{!toggle ? "¡Despreocúpate" : "Primera fintech"}</b>
          </Typography>
          <Typography className="title">
            <b>{!toggle ? "De las entregas" : "para el sector transporte"}</b>
          </Typography>
          <Typography className="subtitle">
            {!toggle ? "Oficios by tuKarga lo hace por ti!" : undefined}
          </Typography>
          <Typography className="text_light" style={{ marginTop: "10px" }}>
            {!toggle
              ? "Con la ayuda de nuestra red de más de 4000 profesionales,"
              : "¡Con una gama completa de servicios, somos una"}
          </Typography>
          <Typography className="text_light">
            {!toggle
              ? "llevamos tus envíos a tiempo."
              : "solucioń integral para todas las necesidades de su negoció!"}
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
                to={!toggle ? "/contacto" : "/login"}
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
        </>
      )}
    </>
  );
}
