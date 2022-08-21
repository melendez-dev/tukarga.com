// react-router-dom
import { Link } from "react-router-dom";
import {Box, Typography, Button } from "@material-ui/core";
export default function TextLeft() {
  return (
    <>
      <Typography className="title">
        <b>¡Despreocúpate</b>
      </Typography>
      <Typography className="title">
        <b>De las entregas</b>
      </Typography>
      <Typography className="subtitle">
        Oficios by tuKarga lo hace por ti!
      </Typography>
      <Typography className="text_light">
        Con la ayuda de nuestra red de más de 4000 profesionales,
      </Typography>
      <Typography className="text_light">
        llevamos tus envíos a tiempo.
      </Typography>
      <Box>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#ff6600",
            color: "#fff",
            borderRadius: "30px",
            marginTop: "20px",
          }}
        >
          <Link to="/contacto" className="text_light_button">
            Cotizar ahora
          </Link>
        </Button>
      </Box>
    </>
  );
}
