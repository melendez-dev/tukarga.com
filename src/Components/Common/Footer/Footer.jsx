import { useContext } from "react";
import { BrandContext } from "../../../context/BrandContext";
// styles
import { FooterStyled } from "../../../styles/Footer/Footer.styled";
import {
  Box,
  Grid,
  Typography,
  Container,
  useMediaQuery,
} from "@material-ui/core";
// icons
import { ReactComponent as Mail } from "../../../assets/svg/ico_mail-light2.svg";
import { ReactComponent as Address } from "../../../assets/svg/ico_navigation.svg";
import { ReactComponent as MasterCard } from "../../../assets/svg/ico_mastercard.svg";
import { ReactComponent as Visa } from "../../../assets/svg/ico_visa.svg";
import { ReactComponent as Twitter } from "../../../assets/svg/twitter.svg";
import { ReactComponent as FB } from "../../../assets/svg/FB.svg";
import { ReactComponent as In } from "../../../assets/svg/Path 2520.svg";
import img from "../../../assets/images/Logo-Tukarga-final-original_blanco 1.png";
import img2 from "../../../assets/images/Logo.png";
export default function Footer() {
  const isMobile = useMediaQuery("(max-width:960px)");
  const { brand } = useContext(BrandContext);
  return (
    <FooterStyled>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box id="footer" style={{ marginTop: "10px" }}>
              <img src={brand ? img : img2} alt="Logo" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            {!brand && (
              <>
                <Box>
                  <Typography className="textLink">Empresas</Typography>
                </Box>
                <Box>
                  <Typography className="textLink">Transportador</Typography>
                </Box>
                <Box>
                  <Typography className="textLink">Iniciar sesión</Typography>
                </Box>
              </>
            )}
            {brand && (
              <>
                <Box>
                  <Typography className="textLink">
                    Igresar como transportador
                  </Typography>
                </Box>
                <Box>
                  <Typography className="textLink">
                    Igresar como generador de carga
                  </Typography>
                </Box>
              </>
            )}
            {brand & isMobile && (
              <Box className="marginY">
                <hr />
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              className="flexCenter"
              style={{ marginTop: brand ? "-20px" : undefined }}
            >
              <Box>
                <Mail />
              </Box>
              <Typography className="textNormal">
                info@{brand ? "tukarga" : "oficios"}.co
              </Typography>
            </Box>
            <Box
              className="flexCenter"
              style={{
                marginTop: "20px",
              }}
            >
              <Box>
                <Address />
              </Box>
              <Typography className="textNormal">
                {brand
                  ? "AV 9ª, # 123 - 36 Of 702 Bogotá, Colombia"
                  : " Cra 9 # 123 - 36, Piso 7, Edificio Uzaque Bogotá, Colombia "}
              </Typography>
            </Box>
          </Grid>
          {!brand && (
            <>
              <Grid
                item
                xs={12}
                md={3}
                style={{
                  display: isMobile ? "flex" : undefined,
                  alignItems: isMobile ? "center" : undefined,
                }}
              >
                <Box>
                  <Typography className="textNormal">
                    Recibimos todo tipo de pagos
                  </Typography>
                </Box>
                <Box className="flexCenterCenter">
                  <Box className="containerIcons">
                    <MasterCard />
                  </Box>
                  <Box className="containerIcons">
                    <Visa />
                  </Box>
                </Box>
              </Grid>
            </>
          )}
          <Grid item xs={12} md={3}>
            <Box style={{ display: isMobile ? "none" : "block" }}>
              <Typography className="textNormal">
                Siguenos en nuestras redes
              </Typography>
            </Box>
            <Box className="flexCenterCenter">
              <Box className="containerIcons pointer">
                <Twitter />
              </Box>
              <Box className="containerIcons pointer">
                <FB />
              </Box>
              <Box className="containerIcons pointer">
                <In />
              </Box>
            </Box>
          </Grid>
        </Grid>
        {!brand && (
          <Box className="marginY">
            <hr />
          </Box>
        )}
        <Box style={{ marginTop: brand ? "10px" : undefined }}>
          <Typography align={"center"} className="textNormal">
            Todos los derechos reservados-Copyright-2020-Bogotá/Colombia
          </Typography>
        </Box>
      </Container>
    </FooterStyled>
  );
}
