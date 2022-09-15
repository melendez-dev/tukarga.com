import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { FirstSectionStyled } from "../../../styles/ModuleCompanies/FirstSection";

export default function FirstSection({ icon, title, button, scroll, to }) {
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <>
      <Container>
        <FirstSectionStyled>
          <Grid
            container
            spacing={3}
            style={{
              display: isMobile ? "flex" : undefined,
              flexDirection: isMobile ? "column-reverse" : undefined,
            }}
          >
            {isMobile && (
              <Grid item xs={12}>
                <Box>
                  <Button
                    style={{
                      background: "#FF6600",
                      padding: "4px 16px 6px",
                      borderRadius: "8px",
                      maxWidth: "100%",
                      height: "32px",
                      color: "white",
                      fontSize: "9px",
                      width: "100%",
                    }}
                    onClick={() => scroll(to)}
                  >
                    <b>{button}</b>
                  </Button>
                </Box>
              </Grid>
            )}
            <Grid
              item
              xs={12}
              md={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box style={{ maxWidth: "100%" }}>{icon}</Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <Box>
                  <Typography className="title">{title}</Typography>
                </Box>
                {!isMobile && (
                  <>
                    <Box>
                      <Button
                        style={{
                          background: "#FF6600",
                          padding: "4px 16px 6px",
                          borderRadius: "8px",
                          maxWidth: "175px",
                          height: "32px",
                          color: "white",
                          fontSize: "9px",
                        }}
                      >
                        <b>{button}</b>
                      </Button>
                    </Box>
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </FirstSectionStyled>
      </Container>
    </>
  );
}
