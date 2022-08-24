import ButtonIconTextIco from "../../../Components/Shared/Button/ButtonIcoTextIco";
// icons
import { ReactComponent as Arrow } from "../../../assets/svg/Vector.svg";
import { ReactComponent as Mail } from "../../../assets/svg/ico_mail-light.svg";
import { ReactComponent as Motorcycle } from "../../../assets/svg/ico_motorcycle.svg";
import { ReactComponent as Ilustration } from "../../../assets/svg/Ilustración_02.svg";
import { Box, Grid, Typography } from "@material-ui/core";

export default function PrinpalServices() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box className="container">
            <Box>
              <Typography className="title">Principales servicios</Typography>
            </Box>
            <Box className="paddingTop">
              <Typography>
                Estos son los servicios más populares tomados por nuestros
                clientes
              </Typography>
            </Box>
            <Box>
              <ButtonIconTextIco
                firstIcon={<Mail />}
                title="Mensajería"
                subtitle="Solicita aquí"
                secondIcon={<Arrow />}
              />
              <ButtonIconTextIco
                firstIcon={<Motorcycle />}
                title="Domicilios"
                subtitle="Solicita aquí"
                secondIcon={<Arrow />}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="centerIlustration">
            <Ilustration />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
