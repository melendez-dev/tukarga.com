import { SecondSectionStyled } from "../../../styles/ModuleCompanies/SecondSection.styled";
import { Grid, Box, Typography, Container } from "@mui/material";
import { ReactComponent as Ilustration } from "../../../assets/svg/Img.svg";
import { useMediaQuery } from "@material-ui/core";

export default function SecondSection({ html_text, text }) {
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <SecondSectionStyled>
      <Container>
        <Box>
          <Grid container className="centerBox">
            <Grid item xs={12} md={6}>
              <Box
                className="mb"
                style={{ position: isMobile ? "relative" : undefined }}
              >
                <p
                  className="text"
                  dangerouslySetInnerHTML={{ __html: html_text }}
                />
                {isMobile && (
                  <>
                    <Box
                      style={{
                        position: "absolute",
                        top: "40px",
                        right: "-148px",
                        overflow: "hidden",
                      }}
                    >
                      <Ilustration
                        style={{ height: "100px", maxWidth: "100%" }}
                      />
                    </Box>
                  </>
                )}
              </Box>
              <Box>
                <Typography className="text">
                  <b>{text}</b>
                </Typography>
              </Box>
            </Grid>
            {!isMobile && (
              <Grid item xs={12} md={6}>
                <Box className="centerIlustraion">
                  <Ilustration />
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </SecondSectionStyled>
  );
}
