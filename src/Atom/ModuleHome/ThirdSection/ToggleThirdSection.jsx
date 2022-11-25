import { useContext } from "react";
import { MobileContext } from "../../../context/MobileContext";
// matrial

import { Box, Typography, Grid, useMediaQuery } from "@material-ui/core";
// icons
import { ReactComponent as Ilustration } from "../../../assets/svg/Ilustracion_07.svg";
import { ReactComponent as IconTruck } from "../../../assets/svg/ico_truck.svg";
import { ReactComponent as Arrow } from "../../../assets/svg/Vector.svg";
import { ReactComponent as IcoBox } from "../../../assets/svg/ico_box.svg";
import { ReactComponent as TruckMobil } from "../../../assets/svg/Group.svg";

// icons mobile
import { ReactComponent as Dollar } from "../../../assets/svg/dollarmobil.svg";
import { ReactComponent as TruckMobilMobil } from "../../../assets/svg/icontruckmobil.svg";
import { ReactComponent as CreditIcon } from "../../../assets/svg/creditCardMobil.svg";
// shared
import ButtonIconTextIco from "../../../Components/Shared/Button/ButtonIcoTextIco.jsx";

// card mobile with icn
import CardWithIcon from "../../../Components/Shared/Card/Mobile/CardWithIcon";

export default function ToggleThridSection() {
  const isMobile = useContext(MobileContext);
  return (
    <>
      <Grid
        container
        spacing={3}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Box className="containerToggle">
            <Box>
              <Typography className="titleToggle">
                Principales servicios
              </Typography>
            </Box>
            <Box className="paddingTopToggle">
              <Box
                style={{
                  display: isMobile ? "flex" : undefined,
                  alignItems: isMobile ? "center" : undefined,
                  justifyContent: isMobile ? "space-evenly" : undefined,
                }}
              >
                <Typography
                  className="subtitleToggle"
                  style={{
                    width: "90%",
                  }}
                >
                  Estos son los servicios más populares tomados por nuestros
                  clientes
                </Typography>
                <Box style={{ display: isMobile ? "block" : "none" }}>
                  <TruckMobil />
                </Box>
              </Box>
            </Box>
            <Box>
              <ButtonIconTextIco
                firstIcon={<IconTruck />}
                title="Empresa de Transporte"
                subtitle="Solicita aquí"
                secondIcon={<Arrow />}
                route="https://admin.tukarga.com/signup"
                anotherPage={true}
              />
              <ButtonIconTextIco
                firstIcon={<IcoBox />}
                title="Generador de carga"
                subtitle="Solicita aquí"
                secondIcon={<Arrow />}
                route="https://admin.tukarga.com/signup"
                anotherPage={true}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="centerIlustration">
            <Ilustration
              style={{
                maxWidth: "90%",
              }}
            />
          </Box>
        </Grid>
        {isMobile && (
          <>
            <Grid item xs={12}>
              <Box>
                <Typography
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#3C635D",
                    marginBottom: "18px",
                  }}
                >
                  Acceda al Know how de las empresas de transporte que más le
                  conviene con <b>Opex Cargo</b>
                </Typography>
              </Box>
              <Box>
                <Typography
                  style={{
                    fontWeight: "300",
                    fontSize: " 12px",
                    lineHeight: "16px",
                    color: "#3C3C3B",
                  }}
                >
                  Sabemos que sus necesidades son únicas por eso{" "}
                  <b>
                    hacemos match entre su necesidad logística y cientos de
                    empresas de transporte especializadas
                  </b>{" "}
                  sin que pierda de vista cada detalle de su operación.
                  <br />
                  <br />
                  <br />
                  Acceda al Know how de las empresas de transporte que más le
                  conviene con Opex Cargo.
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  overflowX: "scroll",
                  marginTop: "18px",
                }}
              >
                <CardWithIcon
                  icon={<Dollar />}
                  title="Obtenga precios justos"
                  subtitle="Tenemos poder de negociación y la información a la mano para presentarle la mejor oferta siempre"
                />
                <CardWithIcon
                  icon={<CreditIcon />}
                  title="Pague en dólares"
                  subtitle="Pague en dólares y obtenga el mismo precio en su moneda local"
                />
                <CardWithIcon
                  icon={<TruckMobilMobil />}
                  title="Transporte de carga"
                  subtitle="Transporte de carga con la mejor tarifa y servicio"
                />
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}
