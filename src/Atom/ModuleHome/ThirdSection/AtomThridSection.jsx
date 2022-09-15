import { useContext } from "react";
import { MobileContext } from "../../../context/MobileContext";
import { Box, Typography, useMediaQuery } from "@material-ui/core";
export default function ThirdSection() {
  const isMobile = useContext(MobileContext);
  return (
    <>
      <Box>
        <Typography className="title">
          Empresas que hacen parte de Oficios By TuKarga
        </Typography>
      </Box>
      <Box>
        <Typography className="subtitle">
          Dedicate a vender, nosotros nos encargamos de entrgar tus envios
        </Typography>
      </Box>
      {/*
 <Box className="centerImg">
        <img
          src={isMobile ? ImageClients_mobile : ImageClients}
          style={{ maxWidth: "100%" }}
        />
      </Box>
			*/}
    </>
  );
}
