// matrial-ui
import {
  Box,
  Grid,
  Typography,
  Button,
  useMediaQuery,
} from "@material-ui/core";

// shred
import CardHome from "../../../Components/Shared/Card/CardHomeFirstSec";

// icons
//import { ReactComponent as Ilustration } from "../../../assets/svg/image 8.svg";
import { ReactComponent as Msg } from "../../../assets/svg/msg.svg";
import { ReactComponent as Circle } from "../../../assets/svg/Icono (1).svg";
import { ReactComponent as Square } from "../../../assets/svg/Icono (2).svg";
import { ReactComponent as Time } from "../../../assets/svg/Icono (3).svg";

// imgs
import Ilustration from "../../../assets/images/image 8.png";

export default function ToggleFourSection() {
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <>
      <Box className="centerPadding">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              <Typography className="titleToggle">
                Tecnología para controlar y cuidar
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} className="centerTextToggle">
            <Box style={{ width: isMobile ? "100%" : "45%" }}>
              <Typography className="subtitleToggle">
                Desarrollamos nuestra propia tecnología para cuidar de su dinero
                su carga y su privacidad.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} className="centerTextToggle">
            <Box>
              <Box>
                <Button
                  style={{
                    backgroundColor: "#FF6600",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: "bold",
                    padding: "4px 16px 6px",
                    borderRadius: "8px",
                    display: isMobile ? "none" : "block",
                  }}
                >
                  Adquirir el servicio
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="centerIcons">
            <Box>
              <Box>
                <CardHome
                  icon={<Msg />}
                  title={"Conexión con las partes"}
                  text={
                    "Mantenemos conectados todos los stakeholders de la cadena,"
                  }
                />
              </Box>
              <Box style={{ marginTop: "10px" }}>
                <CardHome
                  icon={<Circle />}
                  title={"Clasificamos"}
                  text={
                    "Mostramos y archivamos todos los documentos de la OP que se convierte en data valiosa para el negocio."
                  }
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} style={{ display: isMobile ? "none" : "block" }}>
            {/*Maybe this box relative*/}
            <Box className="boxToggleRelative">
              <Box className="centerImageToggle">
                <img src={Ilustration} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="centerIcons">
            <Box>
              <Box>
                <CardHome
                  icon={<Square />}
                  title={"Modelos predictivos"}
                  text={
                    " Para tarifas, rutas y estacionalidades de producción así nuestros aliados toman decisiones basadas en datos."
                  }
                  rever={isMobile ? false : true}
                />
              </Box>

              <Box>
                <CardHome
                  icon={<Time />}
                  title={"Gestión de Riesgo"}
                  text={
                    "Controlamos el riesgo de cada operación desde el nuestro backoffice"
                  }
                  rever={isMobile ? false : true}
                />
              </Box>
              <Box>
                <Button
                  style={{
                    backgroundColor: "#FF6600",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: "bold",
                    padding: "4px 16px 6px",
                    borderRadius: "8px",
                    width: "100%",
                    display: !isMobile ? "none" : "block",
                    marginTop: "32px",
                  }}
                >
                  Adquirir el servicio
                </Button>
              </Box>
              <Box
                className="centerImageToggle"
                style={{
                  display: isMobile ? "flex" : "none",
                  marginTop: "32px",
                  position: "relative",
                  bottom: "-25px",
                }}
              >
                <Box>
                  <img src={Ilustration} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
