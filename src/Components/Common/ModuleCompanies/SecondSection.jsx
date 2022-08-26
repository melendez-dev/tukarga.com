import { SecondSectionStyled } from "../../../styles/ModuleCompanies/SecondSection.styled";
import { Grid, Box, Typography, Container } from "@mui/material";
import { ReactComponent as Ilustration } from "../../../assets/svg/Img.svg";

export default function SecondSection() {
  return (
    <SecondSectionStyled>
      <Container>
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <Box>
                <Typography>Quieres más clientes sastifechos,</Typography>
                <Typography>
                  la ayuda de nuestra red de <b>más de 4000 profionales,</b>
                </Typography>
                <Typography>Llevamos tus envios a tiempo</Typography>
              </Box>
              <Box>
                <Typography>
                  <b>Contactanos y crezcamos juntos.</b>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Ilustration />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </SecondSectionStyled>
  );
}
