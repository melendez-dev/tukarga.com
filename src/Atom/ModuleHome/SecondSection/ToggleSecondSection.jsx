import { Box, Grid, Typography, Button } from "@material-ui/core";
import { ReactComponent as Ilustration } from "../../../assets/svg/Ilustracion_135.svg";
export default function ToggleSecondSection() {
  return (
    <>
      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid item xs={6}>
          <Box style={{ padding: "0px 73px" }}>
            <Ilustration />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Box>
              <Typography className="titleToggle">
                Ideal para cubrir el día a día, servicio de <b>Última Milla</b>
              </Typography>
            </Box>
            <Box>
              <Typography className="subtitleToggle">
                Estamos convencidos de la eficiencia y grandes resultados de
                nuestro servicio 360º en función de su negocio.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              style={{
                height: "32px",
                width: "152px",
                borderRadius: "8px",
                backgroundColor: "#FF6600",
                color: "white",
                fontSize: "11px",
              }}
            >
              Adquirir el servicio
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
