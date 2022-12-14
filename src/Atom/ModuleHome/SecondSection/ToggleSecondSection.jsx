import { useContext } from "react";
import { MobileContext } from "../../../context/MobileContext";
import { BrandContext } from "../../../context/BrandContext";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { ReactComponent as Ilustration } from "../../../assets/svg/Ilustracion_135.svg";
export default function ToggleSecondSection() {
  const isMobile = useContext(MobileContext);
  const { brand, setBrand } = useContext(BrandContext);
  return (
    <>
      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={6}
          style={{ position: isMobile ? "relative" : undefined }}
        >
          <Box
            style={{
              padding: isMobile ? "0px" : "0px 73px",
              left: isMobile ? "-74px" : undefined,
              top: isMobile ? "-153px" : undefined,
              position: isMobile ? "absolute" : undefined,
            }}
          >
            <Ilustration className="size" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Box>
              <Typography className="titleToggle">
                Ideal para cubrir el día a día, servicio de <b>Última Milla</b>
              </Typography>
            </Box>
            <Box style={{ width: isMobile ? "100%" : "70%" }}>
              <Typography className="subtitleToggle">
                Estamos convencidos de la eficiencia y grandes resultados de
                nuestro servicio 360º en función de su negocio.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              style={{
                height: "32px",
                maxWidth: "152px",
                borderRadius: "8px",
                backgroundColor: "#FF6600",
                color: "white",
                fontSize: isMobile ? "9px" : "11px",
              }}
              onClick={() => setBrand(!brand)}
            >
              Adquirir el servicio
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
