import { ThirdSectionStyled } from "../../../styles/ModuleCompanies/ThirdSection.styled";
import { Container, Box, Typography, Grid } from "@material-ui/core";
import { ReactComponent as Ilustration } from "../../../assets/svg/Ilustracion_15324578.svg";
import CardIcon from "../../Shared/Card/CardHomeFirstSec";
export default function ThirdSection({ data }) {
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
                  <Typography className="title">Servicios</Typography>
                </Box>
                <Grid container spacing={3}>
                  {data.map((item, index) => (
                    <Grid item xs={6} key={index}>
                      <CardIcon
                        icon={item?.icon}
                        title={item?.title}
                        text={item?.text}
                        fullWidth={item?.fullWidth}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThirdSectionStyled>
    </>
  );
}
