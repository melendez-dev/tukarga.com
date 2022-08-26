import { ThirdSectionStyled } from "../../../styles/ModuleCompanies/ThirdSection.styled";
import { Container, Box, Typography, Grid } from "@material-ui/core";
import { ReactComponent as Ilustration } from "../../../assets/svg/Ilustracion_15324578.svg";
import { ReactComponent as IconMotorcycle } from "../../../assets/svg/morotcycle_backg.svg";
import { ReactComponent as IconTime } from "../../../assets/svg/24hours.svg";
import { ReactComponent as IconRouter } from "../../../assets/svg/router_icon.svg";
import CardIcon from "../../Shared/Card/CardHomeFirstSec";
export default function ThirdSection() {
  return (
    <>
      <ThirdSectionStyled>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box>
                <Ilustration />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Box>
                  <Typography>Servicios</Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <CardIcon
                      icon={IconMotorcycle}
                      title="Domicilios / E-commerce / 
											Express."
                      text="Recogemos en el momento que necesites y entregamos a tu cliente final en el menor tiempo posible. "
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CardIcon
                      icon={IconTime}
                      title="Same day/ Next day."
                      text="Recogemos y entregamos tus productos en el mismo día o al día siguiente. "
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CardIcon
                      icon={IconRouter}
                      title="Ruteo."
                      text="Utilizando nuestra tecnología que nos ayuda a optimizar el tiempo, recogemos, zonificamos y entregamos tus productos."
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThirdSectionStyled>
    </>
  );
}
