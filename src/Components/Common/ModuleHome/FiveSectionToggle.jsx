import { Box, Typography, Container, useMediaQuery } from "@material-ui/core";
import Image from "../../../assets/images/Marcas.png";
import ImageMobile from "../../../assets/images/marcas_mobile.png";
export default function FiveSectionToggle() {
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <>
      <Box style={{ padding: isMobile ? "0px" : "73px" }}>
        <Container>
          <Box>
            <Box>
              <Typography
                style={{
                  fontSize: isMobile ? "20px" : "30px",
                  lineHeight: "32px",
                  fontWeight: "400",
                  textAlign: isMobile ? "start" : "center",
                  color: "#3C635D",
                  marginBottom: isMobile ? "10px" : "48px",
                  marginTop: isMobile ? "32px" : undefined,
                }}
              >
                Así nos fortalecemos
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              style={{
                display: isMobile ? "flex" : undefined,
                justifyContent: isMobile ? "center" : undefined,
                marginBottom: isMobile ? "30px" : undefined,
              }}
            >
              <img
                src={isMobile ? ImageMobile : Image}
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
