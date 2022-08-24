// react-router-dom
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@material-ui/core";
export default function TextLeft({ toggle }) {
  return (
    <>
      <Typography className="title">
        <b>{!toggle ? "¡Despreocúpate" : "Tukarga es la"}</b>
      </Typography>
      <Typography className="title">
        <b>{!toggle ? "De las entregas" : "primera plataforma"}</b>
      </Typography>
      <Typography className="subtitle">
        {!toggle
          ? "Oficios by tuKarga lo hace por ti!"
          : "tecnológica de servicios logísticos."}
      </Typography>
      <Typography className="text_light">
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
  );
}
