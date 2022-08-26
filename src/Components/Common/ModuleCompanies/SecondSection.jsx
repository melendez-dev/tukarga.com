import { SecondSectionStyled } from "../../../styles/ModuleCompanies/SecondSection.styled";
import { Grid, Box, Typography, Container } from "@mui/material";
import { ReactComponent as Ilustration } from "../../../assets/svg/Img.svg";

export default function SecondSection({ html_text, text }) {
  return (
    <SecondSectionStyled>
      <Container>
        <Box>
          <Grid container className="centerBox">
            <Grid item xs={6}>
              <Box className="mb">
                <p
                  className="text"
                  dangerouslySetInnerHTML={{ __html: html_text }}
                />
              </Box>
              <Box>
                <Typography className="text">
                  <b>{text}</b>
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
