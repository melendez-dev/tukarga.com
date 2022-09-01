import { Typography, Box, Grid, Button } from "@material-ui/core";
// import svg icons
import { ReactComponent as Icon } from "../../../assets/svg/Icono.svg";
import { ReactComponent as Icon1 } from "../../../assets/svg/Icono_1.svg";
import { ReactComponent as Icon2 } from "../../../assets/svg/Icono_2.svg";
import { ReactComponent as Icon3 } from "../../../assets/svg/Icono _3.svg";
import CardHomeFirstSec from "../../../Components/Shared/Card/CardHomeFirstSec";
export default function RightSide({ isMobile }) {
  return (
    <Box style={{ padding: "24px" }}>
      <Box className="marginBottom">
        <Typography className="titleFirstSec">
          Oficios By TuKarga te ofrece
        </Typography>
      </Box>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <CardHomeFirstSec
            icon={<Icon />}
            title={"Soluciones tecnológicas."}
            text="Nos permite realizar seguimiento en tiempo real, zonificación de pedidos para optimizar el tiempo de entrega."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardHomeFirstSec
            icon={<Icon1 />}
            title="Red Fidelizada"
            text="En las diferentes ciudades, tanto principales secundarias o pequeñas."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardHomeFirstSec
            icon={<Icon2 />}
            title="Soporte"
            text="Contamos con un equipo que estará disponible cuando lo necesites."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardHomeFirstSec
            icon={<Icon3 />}
            title="Integración"
            text="Realizamos la integración de tu sistema de gestión de órdenes para optimizar el tiempo."
          />
        </Grid>
        {isMobile && (
          <Grid item xs={12}>
            <Button
              style={{
                width: "100%",
                height: "32px",
                background: "#FF6600",
                borderRadius: "8px",
                color: "white",
                fontSize: "10px",
              }}
            >
              Más información
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
