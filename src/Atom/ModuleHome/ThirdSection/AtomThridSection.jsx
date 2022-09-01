import ImageClients from "../../../assets/images/Frame 85.png";
import ImageClients_mobile from "../../../assets/images/mobile_framer_85.png";
import { Box, Typography, useMediaQuery } from "@material-ui/core";
export default function ThirdSection() {
  const isMobile = useMediaQuery("(max-width:960px)");
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
