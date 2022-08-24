import { Box, Grid, Typography, Container } from "@material-ui/core";
import Image from "../../../assets/images/Marcas.png";
export default function FiveSectionToggle() {
  return (
    <>
      <Box style={{ padding: "73px" }}>
        <Container>
          <Box>
            <Box>
              <Typography
                style={{
                  fontSize: "30px",
                  lineHeight: "32px",
                  fontWeight: "400",
                  textAlign: "center",
                  color: "#3C635D",
                  marginBottom: "48px",
                }}
              >
                Así nos fortalecemos
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <img
                src={Image}
                alt="marcas"
                style={{
                  width: "90%",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
