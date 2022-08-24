// matrial

import { Box, Typography, Grid } from "@material-ui/core";
// icons
import { ReactComponent as Ilustration } from "../../../assets/svg/Ilustracion_07.svg";
import { ReactComponent as IconTruck } from "../../../assets/svg/ico_truck.svg";
import { ReactComponent as Arrow } from "../../../assets/svg/Vector.svg";
import { ReactComponent as IcoBox } from "../../../assets/svg/ico_box.svg";

// shared
import ButtonIconTextIco from "../../../Components/Shared/Button/ButtonIcoTextIco.jsx";

export default function ToggleThridSection() {
  return (
    <>
      <Grid
        container
        spacing={3}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={6}>
          <Box className="containerToggle">
            <Box>
              <Typography className="titleToggle">
                Principales servicios
              </Typography>
            </Box>
            <Box className="paddingTopToggle">
              <Typography className="subtitleToggle">
                Estos son los servicios más populares tomados por nuestros
                clientes
              </Typography>
            </Box>
            <Box>
              <ButtonIconTextIco
                firstIcon={<IconTruck />}
                title="Empresa de Transporte"
                subtitle="Solicita aquí"
                secondIcon={<Arrow />}
              />
              <ButtonIconTextIco
                firstIcon={<IcoBox />}
                title="Generador de carga"
                subtitle="Solicita aquí"
                secondIcon={<Arrow />}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="centerIlustration">
            <Ilustration
              style={{
                maxWidth: "90%",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
