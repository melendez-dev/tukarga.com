import ButtonIconTextIco from "../../../Components/Shared/Button/ButtonIcoTextIco";
// icons
import { ReactComponent as Arrow } from "../../../assets/svg/Vector.svg";
import { ReactComponent as Mail } from "../../../assets/svg/ico_mail-light.svg";
import { ReactComponent as Motorcycle } from "../../../assets/svg/ico_motorcycle.svg";
import { ReactComponent as Ilustration } from "../../../assets/svg/Ilustración_02.svg";
import { ReactComponent as IlustrationMobil } from "../../../assets/svg/Ilustracion_03.svg";
import { Box, Grid, Typography, useMediaQuery } from "@material-ui/core";

export default function PrinpalServices() {
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box className="container">
            <Box>
              <Typography className="title">Principales servicios</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "27px",
              }}
            >
              <Typography
                className="marginTop"
                style={{
                  fontSize: "12px",
                  width: "196px",
                  marginRight: "40px",
                }}
              >
                Estos son los servicios más populares tomados por nuestros
                clientes
              </Typography>
              <IlustrationMobil />
            </Box>
            <Box>
              <ButtonIconTextIco
                firstIcon={<Mail />}
                title="Mensajería"
                subtitle="Solicita aquí"
                secondIcon={<Arrow />}
                route="/login"
                id={1}
              />
              <ButtonIconTextIco
                firstIcon={<Motorcycle />}
                title="Domicilios"
                subtitle="Solicita aquí"
                secondIcon={<Arrow />}
                route="/login"
                id={2}
              />
            </Box>
          </Box>
        </Grid>
        {!isMobile && (
          <Grid item xs={6}>
            <Box className="centerIlustration">
              <Ilustration />
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}
