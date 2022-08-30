import CardGoal from "../../../Components/Shared/Card/CardGoals";
import { Box, Typography, useMediaQuery, Grid } from "@material-ui/core";
export default function ToggleFirstSection({ isMobile }) {
  return (
    <>
      <Box style={{ padding: "24px" }}>
        <Box>
          <Typography className="titleToggle">Sumérgete y explora</Typography>
        </Box>
        <Box className="center">
          <Box style={{ width: "560px" }}>
            <Typography className="subtitleToggle">
              Tukarga es la primera <b>fintech</b> para el
              <b>sector logístico en LATAM</b>, que busca democratizar la
              tecnología para que cualquier <b>Empresa de Transporte </b>
              pueda acceder a la carga de los grandes
              <b>Geneardores de Carga </b>
              sin que el flujo de Caja sea un problema
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography className="textCard">
            Lo que hemos <b>conseguido</b>
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CardGoal
                  title="+2M"
                  subtitle="de TON a través de la alianza con Mercado y Bolsa"
                />
              </Grid>
              <Grid item xs={6}>
                <CardGoal title="+1K" subtitle="Viajes negociados por la app" />
              </Grid>
              <Grid item xs={6}>
                <CardGoal title="3" subtitle="Productos tecnológicos propios" />
              </Grid>
              <Grid item xs={6}>
                <CardGoal
                  title="5"
                  subtitle="Algoritmos de control de riesgo"
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Box className="centerEvenly">
              <CardGoal
                title="+2M"
                subtitle="de TON a través de la alianza con Mercado y Bolsa"
              />
              <CardGoal title="+1K" subtitle="Viajes negociados por la app" />
              <CardGoal title="3" subtitle="Productos tecnológicos propios" />
              <CardGoal title="5" subtitle="Algoritmos de control de riesgo" />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
