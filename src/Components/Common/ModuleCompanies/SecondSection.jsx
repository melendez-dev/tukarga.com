import { SecondSectionStyled } from "../../../styles/ModuleCompanies/SecondSection.styled";
import { Grid, Box, Typography, Container } from "@mui/material";
import { ReactComponent as Ilustration } from "../../../assets/svg/Img.svg";

export default function SecondSection() {
  return (
    <SecondSectionStyled>
      <Container>
        <Box>
          <Grid container className="centerBox">
            <Grid item xs={6}>
              <Box className="mb">
                <Typography className="text ">
                  Quieres más clientes sastifechos, la ayuda de nuestra red de{" "}
                  <b>más de 4000 profionales,</b>
                  Llevamos tus envios a tiempo
                </Typography>
              </Box>
              <Box>
                <Typography className="text">
                  <b>Contactanos y crezcamos juntos.</b>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="centerIlustraion">
                <Ilustration />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </SecondSectionStyled>
  );
}
