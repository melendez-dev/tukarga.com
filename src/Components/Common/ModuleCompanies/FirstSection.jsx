import { Container, Box, Grid, Typography, Button } from "@material-ui/core";
import { FirstSectionStyled } from "../../../styles/ModuleCompanies/FirstSection";
import { ReactComponent as Ilustration } from "../../../assets/svg/Ilustración_02.svg";
export default function FirstSection() {
  return (
    <>
      <Container>
        <FirstSectionStyled>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Ilustration style={{ width: "265px", height: "203px" }} />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Box>
                  <Typography>
                    Estamos preparados para resolver tus necesidades logísticas
                  </Typography>
                </Box>
                <Box>
                  <Button
                    style={{
                      background: "#FF6600",
                      padding: "4px 16px 6px",
                      borderRadius: "8px",
                      width: "175px",
                      height: "32px",
                      color: "white",
                      fontSize: "10px",
                    }}
                  >
                    <b>Contacta un comercial</b>
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </FirstSectionStyled>
      </Container>
    </>
  );
}
