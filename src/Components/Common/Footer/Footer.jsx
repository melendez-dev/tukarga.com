// styles
import { FooterStyled } from "../../../styles/Footer/Footer.styled";
import { Box, Grid, Typography, Container } from "@material-ui/core";
// icons
import { ReactComponent as Mail } from "../../../assets/svg/ico_mail-light2.svg";
import { ReactComponent as Address } from "../../../assets/svg/ico_navigation.svg";
import { ReactComponent as Logo } from "../../../assets/svg/Logo_white_1.svg";
import { ReactComponent as MasterCard } from "../../../assets/svg/ico_mastercard.svg";
import { ReactComponent as Visa } from "../../../assets/svg/ico_visa.svg";
import { ReactComponent as Twitter } from "../../../assets/svg/twitter.svg";
import { ReactComponent as FB } from "../../../assets/svg/FB.svg";
import { ReactComponent as In } from "../../../assets/svg/Path 2520.svg";
export default function Footer() {
  return (
    <FooterStyled>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              <Logo />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Typography className="textLink">Empresas</Typography>
            </Box>
            <Box>
              <Typography className="textLink">Transportador</Typography>
            </Box>
            <Box>
              <Typography className="textLink">Iniciar sesión</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="flexCenter">
              <Box>
                <Mail />
              </Box>
              <Typography className="textNormal">info@oficios.co</Typography>
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
                Cra 9 # 123 - 36, Piso 7, Edificio Uzaque Bogotá, Colombia
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
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
          <Grid item xs={3}>
            <Box>
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
        <Box className="marginY">
          <hr />
        </Box>

        <Box>
          <Typography align={"center"} className="textNormal">
            Todos los derechos reservados-Copyright-2020-Bogotá/Colombia
          </Typography>
        </Box>
      </Container>
    </FooterStyled>
  );
}
