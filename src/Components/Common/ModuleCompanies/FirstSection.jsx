import { Container, Box, Grid, Typography, Button } from "@material-ui/core";
import { FirstSectionStyled } from "../../../styles/ModuleCompanies/FirstSection";

export default function FirstSection({ icon, title, button }) {
  return (
    <>
      <Container>
        <FirstSectionStyled>
          <Grid container spacing={3}>
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box>{icon}</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Box>
                  <Typography className="title">{title}</Typography>
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
                      fontSize: "9px",
                    }}
                  >
                    <b>{button}</b>
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
